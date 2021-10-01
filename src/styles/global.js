import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        outline:0;
    }
    :root {
        --white:#f5f5f5;
        --vanilla: #f1ede0;
        --black: #0c0d0d;
        --orange: #c85311;
        --gray: #666360;
        --red: #c53020
    }
    #root{
        height:100%
    }
    body{
        background: url('https://images-na.ssl-images-amazon.com/images/I/61llusssl0L.jpg') ;
        background-size:cover;
        color: var(--black);
        display:flex;
        flex-direction: columns ;
        justify-content:center;
        align-items: center;
        min-width:400px;
        height:100vh;
        width:100vw;
        background-repeat: round;
        

        @media (min-width: 700px) {
            background: url('https://images.hdqwalls.com/wallpapers/kimetsu-no-yaiba-anime-4k-yn.jpg') ;
        background-size:cover;
        }

        @media (min-width: 1100px) {
            background: url('https://images3.alphacoders.com/555/555568.jpg') ;
        background-size:cover;
        }
    }
    body,input, button{
        font-family: 'PT serif', serif;
        font-size: 1rem;
    }
    h1,h2,h3,h4{
        font-family: 'Roboto Mono', monospace;
        font-weight: 700;
    }
    button{
        cursor: pointer;
    }
    a{
        text-decoration: none
    }
    .home{
        width:80vw;
        height:60vh;
        display:flex;
        flex-direction: column;
        align-items:center;
        justify-content: space-evenly;        
        h1,h2{
        color: whitesmoke;
        text-align:center
        }
        h1{
            color: var(--orange);
            font-size:xx-large
        }
        h1 + h1{
            margin-top:-50px
        }
    }
    ul{
        display:flex;
        flex-direction:row;
        flex-wrap:wrap;
        justify-content:center;
        align-items:center;
    }
    li{
        list-style-type: none;
        background-color:white;
        width:204px;
        text-align: center;
        margin: 10px;
        background: rgba( 255, 255, 255, 0.9 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );

    }
    header{
        width: 100vw;
        display: flex;
        justify-content: center;
        align-content: center;
        background: rgba( 255, 255, 255, 0.25 );
        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
        backdrop-filter: blur( 4px );
        -webkit-backdrop-filter: blur( 4px );
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;

        border: 1px solid rgba( 255, 255, 255, 0.18 );
    }
    .background_image{
        display:flex;
        flex-direction:column;
        align-items:center
    }
  
    const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}
  
const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}
`;
