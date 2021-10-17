// @flow

import { translate } from '../../base/i18n';
import { IconIncognitoMode } from '../../base/icons';
import { connect } from '../../base/redux';
import { AbstractButton } from '../../base/toolbox/components';
import type { AbstractButtonProps } from '../../base/toolbox/components';
import { checkBlurSupport } from '../functions';
import { VIRTUAL_BACKGROUND_TYPE } from '../../virtual-background/constants';

/**
 * The type of the React {@code Component} props of {@link IncognitoModeButton}.
 */
type Props = AbstractButtonProps & {

    /**
     * Virtual background properties
     */
    _virtualBackground: boolean,

    /**
     * The redux {@code dispatch} function.
     */
    dispatch: Function
};

/**
 * An abstract implementation of a button that toggles the video background dialog.
 */
class IncognitoModeButton extends AbstractButton<Props, *> {
    accessibilityLabel = 'toolbar.accessibilityLabel.selectBackground';
    icon = IconIncognitoMode;
    label = 'toolbar.incognitoMode';
    tooltip = 'toolbar.incognitoMode';

    /**
     * Handles clicking / pressing the button, and toggles the virtual background dialog
     * state accordingly.
     *
     * @protected
     * @returns {void}
     */
    _handleClick() {
        const { handleClick } = this.props;

        if (handleClick) {
            handleClick();

            return;
        }
    }

    /**
     * Returns {@code boolean} value indicating if the background effect is
     * enabled or not.
     *
     * @protected
     * @returns {boolean}
     */
    _isToggled() {
        return this.props._virtualBackground.backgroundType === VIRTUAL_BACKGROUND_TYPE.INCOGNITO &&  this.props._virtualBackground.backgroundEffectEnabled;
    }
}

/**
 * Maps (parts of) the redux state to the associated props for the
 * {@code IncognitoModeButton} component.
 *
 * @param {Object} state - The Redux state.
 * @private
 * @returns {{
 *     _isBackgroundEnabled: boolean
 * }}
 */
function _mapStateToProps(state): Object {

    return {
        _virtualBackground: state['features/virtual-background'],
        visible: checkBlurSupport()
    };
}

export default translate(connect(_mapStateToProps)(IncognitoModeButton));
