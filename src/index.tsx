import { types, util } from 'vortex-api';

const GAME_ID = 'masseffectlegendaryedition';
const STEAMAPP_ID = '1328670';
const ORIGINAPP_ID = '';

function findGame(): string {
    return util.GameStoreHelper.findByAppId([STEAMAPP_ID, ORIGINAPP_ID])
        .then((game: any) => game.gamePath);
}

function main(context: types.IExtensionContext) {

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

export default main;