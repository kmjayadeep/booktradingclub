import { expect } from 'chai';
import { describe, it } from 'mocha';

import { requiresAuth } from '../../middlewares/auth';

const mocks = {
	requiresAuth: {
		req: {
			user: 'testUser'
		}
	},
	noUser: {
		req: {}
	}
};

describe('Auth Middleware', () => {
	describe('requiresAuth', () => {
		it('calls next if req.user exists', (done) => {
			const req = {
				user: 'testUser'
			};
			requiresAuth(req, null, done);
		});

		it('Responds with error if not logged in', (done) => {
			const req = {};
			const res = {
				status: (code) => {
					expect(code).to.equal(401);
					return res;
				},
				json: (response) => {
					expect(response.message).to.equal('Not logged in');
					done();
				}
			};
			requiresAuth(req, res);
		});
	});
});
