import { createGlobalStyle } from 'styled-components';

const styled = { createGlobalStyle };

export const GlobalStyles = styled.createGlobalStyle`
  :root {
    --Background: #121212;
    --white: #fff;
    --light-gray: #e0e0e0;
    --link-color: #b2b2b2;
    --primary: #005aff;
    --green: #005aff;
    --emerald: #005aff;
    
    /* User provided palette */
    --color-primary: #005aff;
    --color-grey-1: #212121;
    --color-grey-2: #454545;
    --color-grey-3: #595959;
    --color-grey-4: #8b8b8b;
    --color-grey-5: #b2b2b2;
    --color-grey-6: #e0e0e0;
    --color-grey-7: #f2f2f2;
    --color-grey-8: #fafafa;
    --color-grey-9: #f9fafd;
    --color-grey-10: #fcfcfc;
    --color-grey-11: #f9f9f9;
    --color-blue-bg: #f3f8ff;
    --color-dark-1: #121212;
    --color-dark-2: #2d2d2d;
    --color-dark-bg2: #1a1a1a;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    -webkit-font-smoothing: antialiased;
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
    font-family: 'SF Pro Display', sans-serif;
    background-color: var(--Background);
    color: var(--white);
    scroll-snap-type: y mandatory;

    &::-webkit-scrollbar {
      width: 0.5rem;
      border-radius: 0.5rem;
      &-thumb {
        background: var(--link-color);
        border-radius: 0.5rem;
      }

      &-track {
        background: var(--Background);
      }
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .parallax {
    overflow: hidden;
    margin: 0;
    white-space: nowrap;
    display: flex;
    flex-wrap: nowrap;
  }

  .parallax .scroller {
    display: flex;
    white-space: nowrap;
    display: flex;
    flex-wrap: nowrap;
  }

  .scroller span {
    display: block;
    margin-right: 5rem;
  }

  .not_complete {
    display: none;
  }

  .complete {
  }
`;
