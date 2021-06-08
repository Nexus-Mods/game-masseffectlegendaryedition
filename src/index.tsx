import { types, util } from 'vortex-api';
import * as path from 'path';

const GAME_ID = 'masseffectlegendaryedition';
const STEAMAPP_ID = '1328670';
const ORIGINAPP_ID = 'Origin.OFR.50.0004049';
const ORIGINAPP_ID2 = 'Origin.OFR.50.0004263';

// const tools = [
//     {
//         id: 'mele1',
//         name: 'Mass Effect 1',
//         shortName: 'ME1',
//         logo: '',
//         executable: () => path.join('Game', 'ME1', 'Binaries', 'Win64', 'MassEffect1.exe'),
//         requiredFiles: [
//             path.join('Game', 'ME1', 'Binaries', 'Win64', 'MassEffect1.exe')
//         ],
//         exclusive: true,
//         relative: true,
//     },
//     {
//         id: 'mele2',
//         name: 'Mass Effect 2',
//         shortName: 'ME2',
//         logo: '',
//         executable: () => path.join('Game', 'ME2', 'Binaries', 'Win64', 'MassEffect2.exe'),
//         requiredFiles: [
//             path.join('Game', 'ME2', 'Binaries', 'Win64', 'MassEffect2.exe')
//         ],
//         exclusive: true,
//         relative: true,
//     },
//     {
//         id: 'mele3',
//         name: 'Mass Effect 3',
//         shortName: 'ME3',
//         logo: '',
//         executable: () => path.join('Game', 'ME3', 'Binaries', 'Win64', 'MassEffect3.exe'),
//         requiredFiles: [
//             path.join('Game', 'ME3', 'Binaries', 'Win64', 'MassEffect3.exe')
//         ],
//         exclusive: true,
//         relative: true,
//     },

// ];

function findGame(): string {
    return util.GameStoreHelper.findByAppId([STEAMAPP_ID, ORIGINAPP_ID, ORIGINAPP_ID2])
        .then((game: any) => game.gamePath);
}

function main(context: types.IExtensionContext) {

    context.registerGame({
        id: GAME_ID,
        name: 'Mass Effect Legendary Edition',
        mergeMods: true,
        queryPath: findGame,
        queryModPath: () => 'Game',
        // supportedTools: tools,
        logo: 'gameart.jpg',
        executable: () => path.join('Game', 'Launcher', 'MassEffectLauncher.exe'),
        requiredFiles: [
            path.join('Game', 'Launcher', 'MassEffectLauncher.exe'),
            path.join('Game', 'ME1', 'Binaries', 'Win64', 'MassEffect1.exe'),
            path.join('Game', 'ME2', 'Binaries', 'Win64', 'MassEffect2.exe'),
            path.join('Game', 'ME3', 'Binaries', 'Win64', 'MassEffect3.exe'),
        ],
        details: {
            steamAppId: STEAMAPP_ID,
            originAppId: ORIGINAPP_ID
        }
    });

    return true;
}

export default main;