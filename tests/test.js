process.env.NODE_ENV = 'test';

const mongoose = require('mongoose');
const User = require("../models/user");
const Event = require("../models/event");


//dev dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
let should = chai.should();

chai.use(chaiHttp);

describe('Users', () => {
    // Before each test, we need to empty the database.
    User.remove({}, (err) => {
        if (err !== null) {
            console.log(err);
        }
        else {
            console.log('Users collection removed');
        }
    });
    /**
     * Test the /GET route
     */
    describe('/GET users', () => {
        it('it should GET all the users', (done) => {
            chai.request(server)
                .get('/user/yash')
                .end((err, res) => {
                    console.log(res.body);
                    res.should.have.status(200);
                    res.body.should.be.a({
                        status: 1,
                        data: Object
                    });
                    done();
                });
        });
    });

    // describe('/POST users', () => {
    //     it('it should POST a user', (done) => {
    //         let user = {
    //             userName: 'yash',
    //             userPassword: 'yash123',
    //             userEmail: 'yash@gmail.com',
    //             userPhoto: 'photo@gmail.com'
    //         }
    //         chai.request(server)
    //             .post('/user/create')
    //             .end((err, res) => {
    //                 res.should.have.status(200);
    //                 res.body.should.be.a('object');
    //                 done();
    //             });
    //     });
    // });
});