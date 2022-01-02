"use strict";

process.env.NODE_ENV = 'test';

var mongoose = require('mongoose');

var User = require("../models/user");

var Event = require("../models/event"); //dev dependencies


var chai = require('chai');

var chaiHttp = require('chai-http');

var server = require('../server');

var should = chai.should();
chai.use(chaiHttp);
describe('Users', function () {
  // Before each test, we need to empty the database.
  User.remove({}, function (err) {
    if (err !== null) {
      console.log(err);
    } else {
      console.log('Users collection removed');
    }
  });
  /**
   * Test the /GET route
   */

  describe('/GET users', function () {
    it('it should GET all the users', function (done) {
      chai.request(server).get('/user/yash').end(function (err, res) {
        console.log(res.body);
        res.should.have.status(200);
        res.body.should.be.a({
          status: 1,
          data: Object
        });
        done();
      });
    });
  }); // describe('/POST users', () => {
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