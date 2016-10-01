var ufcApi = require('../server/utils/ufc_api');
var models = require('../server/models/index');
var async = require('async');

ufcApi = new ufcApi();



ufcApi.getFighters(function(fighters) {
  var UfcFighter = models.UfcFighter;


  async.eachSeries(
    fighters,
    function(fighter, callback) {
      UfcFighter.findOrCreate({
        where: { ufcId: fighter.id },
        defaults: {
          nameFirst: fighter.first_name,
          nickname: fighter.nickname,
          nameLast: fighter.last_name,
          weightClassId: fighter.INTEGER,
          titleHolder: fighter.title_holder,
          wins: fighter.wins,
          losses: fighter.losses,
          draws: fighter.draws,
          isActive: (fighter.fighter_status == "Active"),
          poundForPoundRank: fighter.pound_for_pound_rank,
          ufcId: fighter.id,
          ufcThumbnail: fighter.thumbnail,
          ufcBeltThumbNail: fighter.belt_thumbnail,
          ufcLeftFullBodyImage: fighter.left_full_body_image,
          ufcProfileImage: fighter.profile_image,
          ufcLink: fighter.link,
          meta: fighter
        }
      })
        .spread(function(model, created) {
          console.log(model);
          console.log(created);
          callback();
        })
        .fail(function(err) {
          callback(err);
        });
    },
    function(err) {
      if (err) { console.log(err); }
    }
  );

  //
  // for (var i = 0; i < 3; i++) {
  //   var fighter = fighters[i];
  //
  //   UfcFighter.findOrCreate({
  //     where: { ufcId: fighter.id },
  //     defaults: {
  //       nameFirst: fighter.first_name,
  //       nickname: fighter.nickname,
  //       nameLast: fighter.last_name,
  //       weightClassId: fighter.INTEGER,
  //       titleHolder: fighter.title_holder,
  //       wins: fighter.wins,
  //       losses: fighter.losses,
  //       draws: fighter.draws,
  //       isActive: (fighter.fighter_status == "Active"),
  //       poundForPoundRank: fighter.pound_for_pound_rank,
  //       ufcId: fighter.id,
  //       ufcThumbnail: fighter.thumbnail,
  //       ufcBeltThumbNail: fighter.belt_thumbnail,
  //       ufcLeftFullBodyImage: fighter.left_full_body_image,
  //       ufcProfileImage: fighter.profile_image,
  //       ufcLink: fighter.link,
  //       meta: fighter
  //     }
  //   })
  //     .spread(function(model, created) {
  //       console.log(model);
  //       console.log(created);
  //       return;
  //     })
  //     .fail(function(err){
  //       console.log("Some error: ", err);
  //     });
  //   console.log("end");
  // }
});
