import css from 'styled-jsx/css';

export default css.global`


html,
body,
input {
  font-size: 62.5%;
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}


body.light-mode {
  background-color: #fff;
  color: #333;
  transition: background-color 0.3s ease;
}

body.dark-mode {
  background-color: #10171d;
  color: #dfdfdf;
}

body.dark-mode .navbar {
  background-color: #1B2980;
}

body.dark-mode .dark-mode-toggle > button {
  color: #999;
}

body.dark-mode .dark-mode-toggle > button:last-child {
  color: lightblue;
}

.main-layout {
  margin-top: 15rem;
}

.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #95d3ff;
  padding: 2rem;
  z-index: 1;
}

.content {
  padding: 2rem;
  margin: 0 auto;
  margin-top: 6rem; 
  font-size: 2rem;
  line-height: 1.3em;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.centered {
  position: fixed;
  top: 50%;
  left: 50%;
  /* bring your own prefixes */
  transform: translate(-50%, -50%);
}


body.light-mode .card {
  -webkit-box-shadow: 2px 2px 5px 2px #000; 
  box-shadow: 2px 2px 5px 2px #000;
} 

body.dark-mode .card {
  -webkit-box-shadow: 2px 2px 5px 2px #fe3; 
  box-shadow: 2px 2px 5px 2px #fe3;
} 


.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 0.5rem groove rgba(56,116,255,0.69);
  border-radius: 2.6rem;
  margin: 2rem;
  padding: 2rem;
  width: 20rem;
  height: 20rem;
  max-width: 20rem;
  max-height: 20rem;
  cursor: pointer;
  opacity: 1; top: 0px; left: 0px; 
  transform: matrix(1, 0, 0, 1, 0, 0);
}
.card-title {
  font-weight: 700;
}

.card-img img{
  border-radius: 50%;
  max-width: 15rem;
  max-height: 15rem;
 
}

.card-content {  
  padding: 1rem;
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
}


.content button {
  color: #006688;
  background-color: transparent;
  border: none;
  font-size: 1em;
  padding: 0;
}

body.dark-mode .content code {
  background-color: #1b2938;
}

body.dark-mode .content a {
  color: #ee09;
}

body.dark-mode .content button {
  color: #ee09;
}

.dark-mode-toggle {
  display: flex;
  margin-right: 5rem;
}

.dark-mode-toggle > button {
    font-size: 3rem;
    background: none;
    border: none;
    color: #ffe600;
    cursor: pointer;
    transition: color 0.3s ease;
}

.dark-mode-toggle > button:last-child {
  color: #666;
}
.dark-mode-toggle > button:focus {
  outline: none;
}

.toggle-control {
  position: relative;
  padding: 0 4px;
  display: flex;
  align-items: center;
}

input[type='checkbox'].dark-mode-check {
  width: 40px;
  height: 10px;
  background: #555;
  position: relative;
  border-radius: 5px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
  vertical-align: 2px;
  outline: none;
  }

  input[type='checkbox'].dark-mode-check:checked + label {
    left: 30px;
  }
  input[type='checkbox'].dark-mode-check:focus-visible {
    outline: solid 2px white;
  }

  input[type='checkbox'].dark-mode-check + label {
    display: inline-block;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    transition: all 0.3s ease;
    cursor: pointer;
    position: absolute;
    left: 2px;
    background: #fff;
    opacity: 0.9;
    background-color: #f6f6f6;
  }

  .search-box {
    display: flex;
    flex: 1 100%;
    justify-content: space-around;
    height: 4rem;
  }

  .search-box  input{
    margin-right: 2rem;
  }

  .select-wrapper{
    width: 100%;
  }

  .resetButton{
      color: #fff !important;
      text-transform: uppercase;
      text-decoration: none;
      background: #ed3330;
      padding: 1rem;
      border-radius: 0.5rem;
      display: inline-block;
      border: none;
      transition: all 0.4s ease 0s;
      text-align: center;
  }

  .resetButton:hover{
    background: #434343;
    letter-spacing: 1px;
    -webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
    -moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
    box-shadow: 5px 40px -10px rgba(0,0,0,0.57);
    transition: all 0.4s ease 0s;
  }

  

  .columns-wrapper{
    display: flex;
  }

  .pokemon-wrapper {
    width: 80%
  }
  .pokemon-wrapper h1 {
    text-align: center;
  }

  .pokemon-column {
    width: 50%;

  }
  ul {
    list-style-type: none;
  }

  .grid{
    display: grid;
    margin 0.5rem 0;
  }

  .ability{
    font-weight:700;
    margin 0.5rem 0;
  }


  @media(max-width: 850px){ 
    .columns-wrapper{
      flex-direction: column;
      display: flex;
    }
    .pokemon-wrapper{
      display: flex;
      width:100%;
       flex-direction: column;
    }
    .pokemon-column{ 
       width: 100%;
    }
  }

  @media (max-width: 850px) {
    .select-wrapper {
      display: none;
    }
  }



  `;
