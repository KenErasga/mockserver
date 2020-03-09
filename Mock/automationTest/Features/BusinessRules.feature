Feature: Risk Validation Business Rules Tests

    Background: Background names
        Given We have a JWT auth
        And We have the resource "/risk-validations"
        And We have a request header of {"x-version": "1", "x-brand-id": "abc123"}
        And We have a method of "post"