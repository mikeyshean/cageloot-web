var ufcApi = require('../server/utils/ufc_api');
var models = require('../server/models/index');
var config = require('../config.js');
var async = require('async');

ufcApi = new ufcApi();

ufcApi.getFighters(function(fighters) {
  var UfcFighter = models.UfcFighter;

  async.eachSeries(
    fighters,
    function(fighter, callback) {
      UfcFighter.upsert({
          nameFirst: fighter.first_name,
          nickname: fighter.nickname,
          nameLast: fighter.last_name,
          weightClassId: config.WEIGHT_CLASSES[fighter.weight_class],
          titleHolder: fighter.title_holder,
          wins: fighter.wins,
          losses: fighter.losses,
          draws: fighter.draws,
          isActive: (fighter.fighter_status == "Active"),
          poundForPoundRank: fighter.pound_for_pound_rank,
          ufcId: fighter.id,
          thumbnail: fighter.thumbnail,
          beltThumbNail: fighter.belt_thumbnail,
          leftFullBodyImage: fighter.left_full_body_image,
          profileImage: fighter.profile_image,
          link: fighter.link,
          meta: fighter
      })
      .then(function(res) {
        callback();
      })
      .catch(function(err) {
        callback(err);
      });
    },
    function(err) {
      if (err) { console.log(err); }
    }
  );
});
