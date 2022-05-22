import styled, {css} from 'styled-components';
import BaseModal from './components/modal';

export const ThemeModal = styled(BaseModal)`
    position: fixed;
    inset: 0;
    .overlay{
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(0,0,0,.5);
        width: 100%;
        height: 100vh;
    }
    .box{
        background: var(--colorWhite);
    }
    z-index: 1001;
`