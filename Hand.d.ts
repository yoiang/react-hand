import React from 'react';
import { Sign } from './Signs';
export interface HandProps {
    /**
     * Whether to show information about a recognized hand sign
     */
    showInformation?: boolean;
    /**
     * Optional hand sign to start with
     */
    startSign?: Sign;
}
declare const Hand: React.FC<HandProps>;
export default Hand;
