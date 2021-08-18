/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Videogame, conn } = require('../../src/db.js');
const { v4: uuidv4 } = require("uuid");

const agent = session(app);
const videogame = {
  id: uuidv4(),
  name: "Super Mario Bros",
  description: "this is a super mario bros videogame",
  image:
    " https://image.api.playstation.com/vulcan/ap/rnd/202010/1220/zoRNQGzwMQRJDpRSKjifE1vu.png",
};

describe('Videogame routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Videogame.sync({ force: true })
    .then(() => Videogame.create(videogame)));
  describe('GET /videogames', () => {
    it('should get 200', () =>
      agent.get('/videogames').expect(200)
    );
  });
});
