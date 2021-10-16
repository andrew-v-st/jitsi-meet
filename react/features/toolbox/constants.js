/**
 * Thresholds for displaying toolbox buttons
 */
export const THRESHOLDS = [
    {
        width: 520,
        order: [ 'microphone', 'camera', 'incognito', 'desktop', 'chat', 'raisehand', 'participants', 'tileview' ]
    },
    {
        width: 470,
        order: [ 'microphone', 'camera', 'incognito',  'desktop', 'chat', 'participants' ]
    },
    {
        width: 420,
        order: [ 'microphone', 'camera',  'incognito','chat', 'participants' ]
    },
    {
        width: 370,
        order: [ 'microphone', 'camera',  'incognito',   'chat']
    },
    {
        width: 320,
        order: [ 'microphone', 'camera', 'chat' ]
    },
    {
        width: 270,
        order: [ 'microphone', 'camera' ]
    }
];

export const NOT_APPLICABLE = 'N/A';

export const TOOLBAR_TIMEOUT = 4000;
