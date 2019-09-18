import css from 'styled-jsx/css'

export default css.global`
:root {
  font-size: 62.5%;
}


html,
body {
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
  background-color: #1b2938;
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
  padding: 20px;
}

.content {
  padding: 20px;
  margin: 0 auto;
  margin-top: 60px;
  max-width: 600px;
  font-size: 20px;
  line-height: 1.3em;
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
  margin: 0 auto;
}

.dark-mode-toggle > button {
    font-size: 1.2em;
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

input[type='checkbox'].dmcheck {
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

  input[type='checkbox'].dmcheck:checked + label {
    left: 30px;
  }
  input[type='checkbox'].dmcheck:focus-visible {
    outline: solid 2px white;
  }

  input[type='checkbox'].dmcheck + label {
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




  `