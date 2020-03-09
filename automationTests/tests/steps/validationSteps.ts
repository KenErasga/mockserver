import { Given, Then, When } from "cucumber";
import { expect } from "chai";
import config from "../support/config/config";



process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

// get auth token: needs refactoring
Given("We have an auth", async function() {
  const formData = new URLSearchParams();
  formData.append('grant_type', 'client_credentials');
  formData.append('client_id', config.authClientId);
  formData.append('client_secret', config.authClientSecret);
  formData.append('resource', config.authResource);


  const options = {
    method: "post",
    headers: {"Content-Type": "application/x-www-form-urlencoded"},
    body: formData.toString()
  }

  const response = await fetch(config.authUrl, options).then(async (res) => {
    return res.json()
  })

  this.token = response.access_token
});

Given("There is no auth token", function() {
  this.token = null
})

// setting up initial resource, header, payload
Given("We have the resource {string}", function(path: string) {
  this.url = config.hostEnv + path;
});

Given("We have a method of {string}", function(method: string) {
  this.method = method
})