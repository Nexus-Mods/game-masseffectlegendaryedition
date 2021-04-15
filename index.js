const { util } = require('vortex-api');

const GAME_ID = 'masseffectlegendaryedition';
const STEAMAPP_ID = '1328670';
const ORIGINAPP_ID = '';


function findGame() {
    return util.GameStoreHelper.findByAppId([STEAMAPP_ID, ORIGINAPP_ID])
        .then(game => game.gamePath);
}


function main(context) {
    context.registerGame({
        id: GAME_ID,
        name: 'Mass Effect Legendary Edition',
        mergeMods: true,
        queryPath: findGame,
        queryModPath: () => '.',
        logo: 'gameart.jpg',
        executable: () => 'Mass Effect Legendary Edition.exe',
        requiredFiles: [],
        details: {
            steamAppId: STEAMAPP_ID
        }
    });

    return true;
}

module.exports = {
    default: main
};