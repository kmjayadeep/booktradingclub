import { expect } from 'chai';
import { describe, it } from 'mocha';

import ErrorCodes from '../../helpers/errorCodes';
import mongooseErrorFormatter from '../../helpers/mongooseErrorFormatter';

const possibleErrors = {
	duplicateEmail: {
		name: 'MongoError',
		message: 'E11000 duplicate key error collection: booksharingapp.users index: email_1 dup key: { : "a@a.com" }',
		driver: true,
		index: 0,
		code: 11000,
		errmsg: 'E11000 duplicate key error collection: booksharingapp.users index: email_1 dup key: { : "a@a.com" }'
	},
	missingName: {
		errors: {
			name: {
				message: 'Path `name` is required.',
				name: 'ValidatorError',
				properties: {
					message: 'Path `{PATH}` is required.',
					type: 'required',
					path: 'name'
				},
				kind: 'required',
				path: 'name',
				$isValidatorError: true
			}
		},
		_message: 'User validation failed',
		message: 'User validation failed: name: Path `name` is required.',
		name: 'ValidationError'
	},
	missingEmail: {
		errors: {
			email: {
				message: 'Path `email` is required.',
				name: 'ValidatorError',
				properties: {
					message: 'Path `{PATH}` is required.',
					type: 'required',
					path: 'email'
				},
				kind: 'required',
				path: 'email',
				$isValidatorError: true
			}
		},
		_message: 'User validation failed',
		message: 'User validation failed: email: Path `email` is required.',
		name: 'ValidationError'
    }
};

describe('Mongoose Error Formatter', () => {
	it('should catch duplicate email error', () => {
		const formattedError = mongooseErrorFormatter(possibleErrors.duplicateEmail);
		expect(formattedError.code).to.equal(ErrorCodes.DUPLICATE_KEY);
		expect(formattedError.data).to.equal('email');
    });
    
    it('should catch missing email error',()=>{
        const formattedError = mongooseErrorFormatter(possibleErrors.missingEmail);
        expect(formattedError.code).to.equal(ErrorCodes.REQUIRED_FIELD);
        expect(formattedError.data).to.equal('email');
    })

    it('should catch missing name error', () => {
        const formattedError = mongooseErrorFormatter(possibleErrors.missingName);
        expect(formattedError.code).to.equal(ErrorCodes.REQUIRED_FIELD);
        expect(formattedError.data).to.equal('name');
    })
});
