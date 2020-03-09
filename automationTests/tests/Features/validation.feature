Feature: Risk Validation Business Rules Tests

    Background: Background name
        Given We have an auth
        And We have the resource "/validations"
        And We have a request header of {"x-version": "1", "x-brand-id": "abc123"}
        And We have a method of "post"