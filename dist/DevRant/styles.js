(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "body,\r\nhtml {\r\n  font-family: sans-serif;\r\n  background: #0a0b24;\r\n  margin: 0;\r\n  padding: 0;\r\n  overflow-x: hidden;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  font-family: \"Abel\", sans-serif;\r\n}\r\n\r\n.hide {\r\n  display: none !important;\r\n}\r\n\r\n.layout--wrapped {\r\n  max-width: 1170px;\r\n  padding: 12px;\r\n}\r\n\r\n.layout--center {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n::-moz-selection {\r\n  /* Code for Firefox */\r\n  color: white;\r\n  background: #24e063;\r\n}\r\n\r\n::selection {\r\n  color: white;\r\n  background: #24e063;\r\n}\r\n\r\n.page {\r\n  height: 100vh;\r\n}\r\n\r\n.header {\r\n  background: #0a0b24;\r\n  height: 60px;\r\n  top: 0;\r\n  width: 100%;\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n}\r\n\r\n.header .header__content {\r\n  display: flex;\r\n  width: 100%;\r\n  height: 100%;\r\n  align-items: flex-start;\r\n  justify-content: center;\r\n}\r\n\r\n.header .header__content .brand {\r\n  height: 100%;\r\n  width: auto;\r\n  align-self: flex-start;\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n}\r\n\r\n.header .header__content .brand .brand__name {\r\n  color: white;\r\n  font-family: \"Fredoka One\", cursive;\r\n  font-size: 18px;\r\n}\r\n\r\n.header .header__content .brand .brand__name span {\r\n  color: #24e063;\r\n}\r\n\r\n.header .header__content .brand a {\r\n  text-decoration: none;\r\n}\r\n\r\na {color: white;}\r\n\r\n/* unvisited link */\r\n\r\na:visited {color:white;}\r\n\r\n/* visited link */\r\n\r\na:hover {color:white;}\r\n\r\n/* mouse over link */\r\n\r\na:active {color:white;}\r\n\r\n.header .header__content .profile {\r\n  height: 100%;\r\n  margin-left: auto;\r\n}\r\n\r\n.header .header__content .profile .profile__picture {\r\n  width: 36px;\r\n  height: 36px;\r\n}\r\n\r\n.header .header__content .profile .profile__name {\r\n  color: white;\r\n  padding-left: 10px;\r\n  font-size: 18px;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.header .header__content .join {\r\n  margin-left: auto;\r\n  color: white;\r\n  font-size: 20px;\r\n  cursor: pointer;\r\n  text-transform: uppercase;\r\n  transition: all 0.2s cubic-bezier(0.12, 0.64, 0.58, 1);\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n}\r\n\r\n.header .header__content .join:hover {\r\n  color: #fd2954;\r\n}\r\n\r\n.main .main__content {\r\n  width: 100%;\r\n  padding-top: 12px;\r\n}\r\n\r\n.post-list  {\r\n  padding-right: 0;\r\n  margin: 0;\r\n}\r\n\r\n.post-list  app-rant {\r\n  text-decoration: none;\r\n  width: calc(33.33% - 14px);\r\n  height: 160px;\r\n  margin-right: 16px;\r\n  font-size: 14px;\r\n  display: inline-block;\r\n  background: #212439;\r\n  margin-bottom: 16px;\r\n  color: white;\r\n  padding: 12px;\r\n  cursor: pointer;\r\n  border: 1px solid transparent;\r\n  transition: -webkit-transform 0.2s cubic-bezier(0.12, 0.64, 0.58, 1);\r\n  transition: transform 0.2s cubic-bezier(0.12, 0.64, 0.58, 1);\r\n  transition: transform 0.2s cubic-bezier(0.12, 0.64, 0.58, 1), -webkit-transform 0.2s cubic-bezier(0.12, 0.64, 0.58, 1);\r\n}\r\n\r\n.post-list  app-rant .post__inner {\r\n  display: flex;\r\n  height: calc(100% - 30px);\r\n}\r\n\r\n.post-list  app-rant .post__inner .score {\r\n  width: 40px;\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\n\r\n.post-list  app-rant .post__inner .score .score__up,\r\n.post-list  app-rant .post__inner .score .score__down {\r\n  width: 32px;\r\n  height: 32px;\r\n  font-weight: bold;\r\n  letter-spacing: 2px;\r\n  border-radius: 100%;\r\n  cursor: pointer;\r\n  background: #5c5f6f;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n  transition: all 0.1s ease-in;\r\n}\r\n\r\n.post-list  app-rant .post__inner .score .score__up:hover {\r\n  background: #1ba749 !important;\r\n}\r\n\r\n.post-list  app-rant .post__inner .score .score__up.checked {\r\n  background: #1ba749 !important;\r\n}\r\n\r\n.post-list  app-rant .post__inner .score .score__down:hover {\r\n  background: #fd2954 !important;\r\n}\r\n\r\n.post-list  app-rant .post__inner .score .score__down.checked {\r\n  background: #fd2954 !important;\r\n}\r\n\r\n.post-list  app-rant .post__inner .score .score__board {\r\n  padding: 4px 0;\r\n}\r\n\r\n.post-list  app-rant .post__inner .post__body {\r\n  width: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: flex-start;\r\n  padding-left: 12px;\r\n  word-break: break-word;\r\n  font-size: 16px;\r\n}\r\n\r\n.post-list  app-rant .post__footer {\r\n  width: 100%;\r\n  height: 30px;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.post-list  app-rant .post__footer .post__time {\r\n  width: auto;\r\n  color: gray;\r\n}\r\n\r\n.post-list  app-rant .post__footer .post__comments {\r\n  margin-left: auto;\r\n  display: flex;\r\n  color: gray;\r\n  align-items: center;\r\n  transition: all 0.1s ease-in;\r\n}\r\n\r\n.post-list  app-rant .post__footer .post__comments .icon {\r\n  width: 16px;\r\n  margin-right: 4px;\r\n  height: 16px;\r\n  fill: gray;\r\n  transition: all 0.1s ease-in;\r\n}\r\n\r\n.post-list  app-rant:nth-child(3n) {\r\n  margin-right: 0;\r\n}\r\n\r\n.post-list  app-rant:hover {\r\n  -webkit-transform: scale(1.1);\r\n          transform: scale(1.1);\r\n  border: 1px solid gray;\r\n}\r\n\r\n.post-list  app-rant:hover .score__up {\r\n  background: gray !important;\r\n}\r\n\r\n.post-list  app-rant:hover .score__down {\r\n  background: gray !important;\r\n}\r\n\r\n.post-list  app-rant:hover .post__comments {\r\n  color: #24e063;\r\n}\r\n\r\n.post-list  app-rant:hover .post__comments .icon {\r\n  fill: #24e063;\r\n}\r\n\r\n.rant__add,\r\n.rant__comment {\r\n  position: fixed;\r\n  bottom: 24px;\r\n  z-index: 2;\r\n  width: 50px;\r\n  height: 50px;\r\n  margin: 0 auto;\r\n  text-align: center;\r\n  background: #fd2954;\r\n  font-size: 36px;\r\n  line-height: 36px;\r\n  font-family: \"Fredoka One\", cursive;\r\n  padding: 4px;\r\n  border-radius: 100%;\r\n  color: white;\r\n  left: 50%;\r\n  cursor: pointer;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n  transition: all 0.1s ease-in;\r\n  margin-left: -25px;\r\n}\r\n\r\n.rant__add:hover,\r\n.rant__comment:hover {\r\n  background: #d31c41;\r\n}\r\n\r\n.rant__comment .icon {\r\n  fill: white;\r\n  width: 24px;\r\n  height: 24px;\r\n}\r\n\r\n.rant-details {\r\n  flex-direction: column;\r\n}\r\n\r\n.rant-details .post-hero {\r\n  width: 100%;\r\n  font-size: 14px;\r\n  display: block;\r\n  background: #212439;\r\n  margin-bottom: 16px;\r\n  color: white;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n  justify-content: center;\r\n}\r\n\r\n.rant-details .post-hero .post-hero__inner {\r\n  padding: 30px 50px;\r\n  display: flex;\r\n  width: 100%;\r\n  height: calc(100% - 30px);\r\n}\r\n\r\n.rant-details .post-hero .post-hero__inner .score {\r\n  width: 80px;\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: column;\r\n}\r\n\r\n.rant-details .post-hero .post-hero__inner .score .score__up,\r\n.rant-details .post-hero .post-hero__inner .score .score__down {\r\n  width: 48px;\r\n  height: 48px;\r\n  font-weight: bold;\r\n  font-size: 22px;\r\n  letter-spacing: 2px;\r\n  border-radius: 100%;\r\n  cursor: pointer;\r\n  background: #5c5f6f;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n  transition: all 0.1s ease-in;\r\n}\r\n\r\n.rant-details .post-hero .post-hero__inner .score .score__up:hover {\r\n  background: #1ba749 !important;\r\n}\r\n\r\n.rant-details .post-hero .post-hero__inner .score .score__up.checked {\r\n  background: #1ba749 !important;\r\n}\r\n\r\n.rant-details .post-hero .post-hero__inner .score .score__down:hover {\r\n  background: #fd2954 !important;\r\n}\r\n\r\n.rant-details .post-hero .post-hero__inner .score .score__down.checked {\r\n  background: #fd2954 !important;\r\n}\r\n\r\n.rant-details .post-hero .post-hero__inner .score .score__board {\r\n  padding: 12px 0;\r\n  font-size: 22px;\r\n}\r\n\r\n.rant-details .post-hero .post-hero__inner .post-hero__body {\r\n  width: 100%;\r\n  display: flex;\r\n  align-items: flex-start;\r\n  justify-content: flex-start;\r\n  padding-left: 30px;\r\n  word-break: break-word;\r\n  font-size: 22px;\r\n  flex-direction: column;\r\n}\r\n\r\n.rant-details .post-hero .post-hero__inner .post-hero__body .profile {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.rant-details .post-hero .post-hero__inner .post-hero__body .profile .profile__name {\r\n  font-size: 20px;\r\n  padding-left: 8px;\r\n}\r\n\r\n.rant-details .post-hero .post-hero__inner .post-hero__body .post__details {\r\n  padding-top: 18px;\r\n}\r\n\r\n.rant-details .post-hero .post-hero__footer {\r\n  width: 100%;\r\n  height: 30px;\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 30px 60px;\r\n}\r\n\r\n.rant-details .post-hero .post-hero__footer .post-hero__delete {\r\n  border: 1px solid #db153d;\r\n  padding: 4px 8px;\r\n  background: transparent;\r\n  color: #fd2954;\r\n  transition: all 0.2s ease-in;\r\n  cursor: pointer;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n}\r\n\r\n.rant-details .post-hero .post-hero__footer .post-hero__delete:hover {\r\n  color: white;\r\n  background: #b11837;\r\n}\r\n\r\n.rant-details .post-hero .post-hero__footer .post-hero__time {\r\n  width: auto;\r\n  margin-left: auto;\r\n  font-size: 18px;\r\n  color: lightgray;\r\n}\r\n\r\n.rant-details .no-comments {\r\n  color: #5b5e6f;\r\n  font-size: 19px;\r\n}\r\n\r\n.rant-details .comments {\r\n  display: block;\r\n  max-width: 600px;\r\n  width: 100%;\r\n  height: 200px;\r\n}\r\n\r\n.rant-details .comments .comments__title {\r\n  color: #5b5e6f;\r\n  font-size: 32px;\r\n  margin-top: 8px;\r\n  margin-bottom: 12px;\r\n}\r\n\r\n.rant-details .comments .comments__title span {\r\n  color: #24e063;\r\n}\r\n\r\n.rant-details .comments .comment {\r\n  width: 100%;\r\n  font-size: 14px;\r\n  display: block;\r\n  background: #212439;\r\n  margin-bottom: 16px;\r\n  color: white;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n  justify-content: center;\r\n}\r\n\r\n.rant-details .comments .comment .comment__inner {\r\n  padding: 20px 20px;\r\n  display: flex;\r\n  width: 100%;\r\n  height: calc(100% - 30px);\r\n}\r\n\r\n.rant-details .comments .comment .comment__inner .comment__body {\r\n  width: 100%;\r\n  display: flex;\r\n  align-items: flex-start;\r\n  justify-content: flex-start;\r\n  word-break: break-word;\r\n  font-size: 20px;\r\n  flex-direction: column;\r\n}\r\n\r\n.rant-details .comments .comment .comment__inner .comment__body .profile {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.rant-details .comments .comment .comment__inner .comment__body .profile .profile__name {\r\n  font-size: 20px;\r\n  padding-left: 8px;\r\n}\r\n\r\n.rant-details .comments .comment .comment__footer {\r\n  width: 100%;\r\n  height: 30px;\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 0 20px 20px 20px;\r\n}\r\n\r\n.rant-details .comments .comment .comment__footer .comment__delete {\r\n  border: 1px solid #db153d;\r\n  padding: 4px 8px;\r\n  background: transparent;\r\n  color: #fd2954;\r\n  transition: all 0.2s ease-in;\r\n  cursor: pointer;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n}\r\n\r\n.rant-details .comments .comment .comment__footer .comment__delete:hover {\r\n  color: white;\r\n  background: #b11837;\r\n}\r\n\r\n.rant-details .comments .comment .comment__footer .comment__time {\r\n  width: auto;\r\n  margin-left: auto;\r\n  font-size: 18px;\r\n  color: gray;\r\n}\r\n\r\n.blur {\r\n  -webkit-filter: blur(3px);\r\n          filter: blur(3px);\r\n}\r\n\r\n.popup {\r\n  width: 100%;\r\n  height: 100vh;\r\n  background: #0a0b24f3;\r\n  display: block;\r\n  position: fixed;\r\n  top: 100vh;\r\n  left: 0;\r\n  z-index: 3;\r\n  transition: top 0.3s cubic-bezier(0.12, 0.64, 0.58, 1), opacity 0.3s cubic-bezier(0.12, 0.64, 0.58, 1);\r\n}\r\n\r\n.popup .popup__header {\r\n  width: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: flex-end;\r\n  height: 70px;\r\n}\r\n\r\n.popup .popup__header .close {\r\n  background: gray;\r\n  width: 44px;\r\n  height: 44px;\r\n  border-radius: 100%;\r\n  margin-left: auto;\r\n  margin-right: 24px;\r\n  font-family: \"Fredoka One\", cursive;\r\n  font-size: 28px;\r\n  line-height: 28px;\r\n  cursor: pointer;\r\n  color: white;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n  transition: all 0.3s cubic-bezier(0.12, 0.64, 0.58, 1);\r\n}\r\n\r\n.popup .popup__header .close:hover {\r\n  background: #d31c41;\r\n}\r\n\r\n.popup .popup__body {\r\n  display: flex;\r\n  height: calc(100vh - 70px);\r\n  width: 100%;\r\n}\r\n\r\n.popup .popup__body .popup__body-inner {\r\n  max-width: 600px;\r\n  width: 100%;\r\n  padding: 24px;\r\n}\r\n\r\n.popup .popup__body .popup__body-inner .form .form__title {\r\n  color: white;\r\n  font-size: 32px;\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n\r\n.popup .popup__body .popup__body-inner .form .form__title .highlight {\r\n  color: #24e063;\r\n}\r\n\r\n.popup .popup__body .popup__body-inner .form .form__description {\r\n  color: lightgray;\r\n  font-size: 24px;\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n\r\n.popup .popup__body .popup__body-inner .form .form__error {\r\n  color: #d31c41;\r\n  padding: 0 0 12px 0;\r\n  text-align: center;\r\n  width: 100%;\r\n  font-size: 18px;\r\n}\r\n\r\n.nocomment {\r\n  color: #d31c41;\r\n  padding: 0 0 12px 0;\r\n  text-align: center;\r\n  width: 100%;\r\n  font-size: 18px;\r\n}\r\n\r\n.popup .popup__body .popup__body-inner input[type=submit] {\r\n  background: transparent;\r\n  outline: none;\r\n  border: 1px solid #fd2954;\r\n  -webkit-appearance: none;\r\n     -moz-appearance: none;\r\n          appearance: none;\r\n  cursor: pointer;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n  padding: 8px;\r\n  font-size: 20px;\r\n  height: 50px;\r\n  text-align: center;\r\n  color: #fd2954;\r\n  transition: all 0.2s cubic-bezier(0.12, 0.64, 0.58, 1);\r\n  margin-bottom: 16px;\r\n}\r\n\r\n.popup .popup__body .popup__body-inner input[type=button] {\r\n    background: transparent;\r\n    outline: none;\r\n    border: 1px solid #fd2954;\r\n    -webkit-appearance: none;\r\n       -moz-appearance: none;\r\n            appearance: none;\r\n    cursor: pointer;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n    padding: 8px;\r\n    font-size: 20px;\r\n    height: 50px;\r\n    text-align: center;\r\n    color: #fd2954;\r\n    transition: all 0.2s cubic-bezier(0.12, 0.64, 0.58, 1);\r\n    margin-bottom: 16px;\r\n  }\r\n\r\n.popup .popup__body .popup__body-inner input[type=submit]:hover, .popup .popup__body .popup__body-inner input[type=submit]:focus {\r\n  background: #fd2954;\r\n  color: white;\r\n}\r\n\r\n.popup .popup__body .popup__body-inner input[type=button]:hover, .popup .popup__body .popup__body-inner input[type=button]:focus {\r\n    background: #fd2954;\r\n    color: white;\r\n}\r\n\r\n.popup .popup__body .popup__body-inner input[type=submit]:disabled {\r\n  cursor: not-allowed;\r\n  background: gray;\r\n  border: 1px solid gray;\r\n  color: lightgray;\r\n  pointer-events: none;\r\n}\r\n\r\n.popup .popup__body .popup__body-inner input[type=button]:disabled {\r\n    cursor: not-allowed;\r\n    background: gray;\r\n    border: 1px solid gray;\r\n    color: lightgray;\r\n    pointer-events: none;\r\n  }\r\n\r\n.popup.popup--open {\r\n  top: 0;\r\n}\r\n\r\n.login .loginCustom {\r\n  max-width: 300px;\r\n  display: flex;\r\n  margin: 24px auto;\r\n  flex-direction: column;\r\n}\r\n\r\n/* .login .loginCustom div {\r\n    max-width: 300px;\r\n    display: flex;\r\n    margin: 24px auto;\r\n    flex-direction: column;\r\n  } */\r\n\r\n.login  input[type=text],\r\n.login  input[type=password] {\r\n  background: transparent;\r\n  border: 1px solid gray;\r\n  outline: none;\r\n  padding: 8px;\r\n  font-size: 20px;\r\n  height: 50px;\r\n  text-align: center;\r\n  color: lightgray;\r\n  transition: all 0.2s ease-in;\r\n  margin-bottom: 16px;\r\n}\r\n\r\n.login  input[type=text]:focus,\r\n.login  input[type=password]:focus {\r\n  border-color: #1ba749;\r\n}\r\n\r\n.login  input[type=text] {\r\n  text-transform: uppercase;\r\n}\r\n\r\n.new-rant,\r\n.alert,\r\n.new-comment {\r\n  max-width: 300px;\r\n  display: flex;\r\n  margin: 24px auto;\r\n  flex-direction: column;\r\n}\r\n\r\n.new-rant .newpostCustom textarea,\r\n.alert textarea,\r\n.new-comment textarea {\r\n  background: transparent;\r\n  border: 1px solid gray;\r\n  outline: none;\r\n  padding: 8px;\r\n  font-size: 18px;\r\n  resize: none;\r\n  width: 100%;\r\n  height: 200px;\r\n  text-align: left;\r\n  color: lightgray;\r\n  transition: all 0.2s ease-in;\r\n  margin-bottom: 16px;\r\n}\r\n\r\n.new-rant .newpostCustom textarea:focus,\r\n.alert textarea:focus,\r\n.new-comment textarea:focus {\r\n  border-color: #1ba749;\r\n}\r\n\r\n.loader {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 30px 0;\r\n}\r\n\r\n.loader .spinner {\r\n  width: 64px;\r\n  height: 64px;\r\n}\r\n\r\n.loader .spinner:after {\r\n  content: \" \";\r\n  display: block;\r\n  width: 46px;\r\n  height: 46px;\r\n  margin: 1px;\r\n  border-radius: 50%;\r\n  border: 5px solid #fff;\r\n  border-color: #1ba749 transparent #1ba749 transparent;\r\n  -webkit-animation: lds-dual-ring 1.2s linear infinite;\r\n          animation: lds-dual-ring 1.2s linear infinite;\r\n}\r\n\r\n@-webkit-keyframes lds-dual-ring {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n            transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n@keyframes lds-dual-ring {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n            transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 940px) {\r\n  .post-list  app-rant {\r\n    width: calc(50% - 8px);\r\n  }\r\n  .post-list  app-rant:nth-child(2n) {\r\n    margin-right: 0;\r\n    float: right;\r\n  }\r\n  .post-list  app-rant:nth-child(3n) {\r\n    margin-right: 0;\r\n  }\r\n  .post-list  app-rant:hover {\r\n    -webkit-transform: scale(1.05);\r\n            transform: scale(1.05);\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n  .post-list  app-rant {\r\n    width: calc(100%);\r\n  }\r\n  .post-list  app-rant:hover {\r\n    -webkit-transform: scale(1.02);\r\n            transform: scale(1.02);\r\n  }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,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LFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsNEJBQTRCO0VBQzVCLG1CQUFtQjtBQUNyQjs7QUFDQTs7O0VBR0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUNBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLHFEQUFxRDtFQUNyRCxxREFBNkM7VUFBN0MsNkNBQTZDO0FBQy9DOztBQUNBO0VBQ0U7SUFDRSwrQkFBdUI7WUFBdkIsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSxpQ0FBeUI7WUFBekIseUJBQXlCO0VBQzNCO0FBQ0Y7O0FBUEE7RUFDRTtJQUNFLCtCQUF1QjtZQUF2Qix1QkFBdUI7RUFDekI7RUFDQTtJQUNFLGlDQUF5QjtZQUF6Qix5QkFBeUI7RUFDM0I7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usc0JBQXNCO0VBQ3hCO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsWUFBWTtFQUNkO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSw4QkFBc0I7WUFBdEIsc0JBQXNCO0VBQ3hCO0FBQ0Y7O0FBQ0E7RUFDRTtJQUNFLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsOEJBQXNCO1lBQXRCLHNCQUFzQjtFQUN4QjtBQUNGIiwiZmlsZSI6InNyYy9zdHlsZXMuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSxcclxuaHRtbCB7XHJcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgYmFja2dyb3VuZDogIzBhMGIyNDtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuXHJcbioge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgZm9udC1mYW1pbHk6IFwiQWJlbFwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uaGlkZSB7XHJcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubGF5b3V0LS13cmFwcGVkIHtcclxuICBtYXgtd2lkdGg6IDExNzBweDtcclxuICBwYWRkaW5nOiAxMnB4O1xyXG59XHJcblxyXG4ubGF5b3V0LS1jZW50ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuOjotbW96LXNlbGVjdGlvbiB7XHJcbiAgLyogQ29kZSBmb3IgRmlyZWZveCAqL1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kOiAjMjRlMDYzO1xyXG59XHJcblxyXG46OnNlbGVjdGlvbiB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQ6ICMyNGUwNjM7XHJcbn1cclxuXHJcbi5wYWdlIHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4uaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kOiAjMGEwYjI0O1xyXG4gIGhlaWdodDogNjBweDtcclxuICB0b3A6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxufVxyXG4uaGVhZGVyIC5oZWFkZXJfX2NvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5oZWFkZXIgLmhlYWRlcl9fY29udGVudCAuYnJhbmQge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogYXV0bztcclxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmhlYWRlciAuaGVhZGVyX19jb250ZW50IC5icmFuZCAuYnJhbmRfX25hbWUge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LWZhbWlseTogXCJGcmVkb2thIE9uZVwiLCBjdXJzaXZlO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG4uaGVhZGVyIC5oZWFkZXJfX2NvbnRlbnQgLmJyYW5kIC5icmFuZF9fbmFtZSBzcGFuIHtcclxuICBjb2xvcjogIzI0ZTA2MztcclxufVxyXG4uaGVhZGVyIC5oZWFkZXJfX2NvbnRlbnQgLmJyYW5kIGEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuYSB7Y29sb3I6IHdoaXRlO30gICAgICAvKiB1bnZpc2l0ZWQgbGluayAqL1xyXG5hOnZpc2l0ZWQge2NvbG9yOndoaXRlO30gIC8qIHZpc2l0ZWQgbGluayAqL1xyXG5hOmhvdmVyIHtjb2xvcjp3aGl0ZTt9ICAvKiBtb3VzZSBvdmVyIGxpbmsgKi9cclxuYTphY3RpdmUge2NvbG9yOndoaXRlO30gXHJcblxyXG4uaGVhZGVyIC5oZWFkZXJfX2NvbnRlbnQgLnByb2ZpbGUge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG4uaGVhZGVyIC5oZWFkZXJfX2NvbnRlbnQgLnByb2ZpbGUgLnByb2ZpbGVfX3BpY3R1cmUge1xyXG4gIHdpZHRoOiAzNnB4O1xyXG4gIGhlaWdodDogMzZweDtcclxufVxyXG4uaGVhZGVyIC5oZWFkZXJfX2NvbnRlbnQgLnByb2ZpbGUgLnByb2ZpbGVfX25hbWUge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuLmhlYWRlciAuaGVhZGVyX19jb250ZW50IC5qb2luIHtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGN1YmljLWJlemllcigwLjEyLCAwLjY0LCAwLjU4LCAxKTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG4uaGVhZGVyIC5oZWFkZXJfX2NvbnRlbnQgLmpvaW46aG92ZXIge1xyXG4gIGNvbG9yOiAjZmQyOTU0O1xyXG59XHJcblxyXG4ubWFpbiAubWFpbl9fY29udGVudCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy10b3A6IDEycHg7XHJcbn1cclxuXHJcbi5wb3N0LWxpc3QgIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4ucG9zdC1saXN0ICBhcHAtcmFudCB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHdpZHRoOiBjYWxjKDMzLjMzJSAtIDE0cHgpO1xyXG4gIGhlaWdodDogMTYwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYmFja2dyb3VuZDogIzIxMjQzOTtcclxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxMnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBjdWJpYy1iZXppZXIoMC4xMiwgMC42NCwgMC41OCwgMSk7XHJcbn1cclxuLnBvc3QtbGlzdCAgYXBwLXJhbnQgLnBvc3RfX2lubmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGhlaWdodDogY2FsYygxMDAlIC0gMzBweCk7XHJcbn1cclxuLnBvc3QtbGlzdCAgYXBwLXJhbnQgLnBvc3RfX2lubmVyIC5zY29yZSB7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLnBvc3QtbGlzdCAgYXBwLXJhbnQgLnBvc3RfX2lubmVyIC5zY29yZSAuc2NvcmVfX3VwLFxyXG4ucG9zdC1saXN0ICBhcHAtcmFudCAucG9zdF9faW5uZXIgLnNjb3JlIC5zY29yZV9fZG93biB7XHJcbiAgd2lkdGg6IDMycHg7XHJcbiAgaGVpZ2h0OiAzMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZDogIzVjNWY2ZjtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluO1xyXG59XHJcbi5wb3N0LWxpc3QgIGFwcC1yYW50IC5wb3N0X19pbm5lciAuc2NvcmUgLnNjb3JlX191cDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogIzFiYTc0OSAhaW1wb3J0YW50O1xyXG59XHJcbi5wb3N0LWxpc3QgIGFwcC1yYW50IC5wb3N0X19pbm5lciAuc2NvcmUgLnNjb3JlX191cC5jaGVja2VkIHtcclxuICBiYWNrZ3JvdW5kOiAjMWJhNzQ5ICFpbXBvcnRhbnQ7XHJcbn1cclxuLnBvc3QtbGlzdCAgYXBwLXJhbnQgLnBvc3RfX2lubmVyIC5zY29yZSAuc2NvcmVfX2Rvd246aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNmZDI5NTQgIWltcG9ydGFudDtcclxufVxyXG4ucG9zdC1saXN0ICBhcHAtcmFudCAucG9zdF9faW5uZXIgLnNjb3JlIC5zY29yZV9fZG93bi5jaGVja2VkIHtcclxuICBiYWNrZ3JvdW5kOiAjZmQyOTU0ICFpbXBvcnRhbnQ7XHJcbn1cclxuLnBvc3QtbGlzdCAgYXBwLXJhbnQgLnBvc3RfX2lubmVyIC5zY29yZSAuc2NvcmVfX2JvYXJkIHtcclxuICBwYWRkaW5nOiA0cHggMDtcclxufVxyXG4ucG9zdC1saXN0ICBhcHAtcmFudCAucG9zdF9faW5uZXIgLnBvc3RfX2JvZHkge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMnB4O1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbi5wb3N0LWxpc3QgIGFwcC1yYW50IC5wb3N0X19mb290ZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMzBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLnBvc3QtbGlzdCAgYXBwLXJhbnQgLnBvc3RfX2Zvb3RlciAucG9zdF9fdGltZSB7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgY29sb3I6IGdyYXk7XHJcbn1cclxuLnBvc3QtbGlzdCAgYXBwLXJhbnQgLnBvc3RfX2Zvb3RlciAucG9zdF9fY29tbWVudHMge1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgY29sb3I6IGdyYXk7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluO1xyXG59XHJcbi5wb3N0LWxpc3QgIGFwcC1yYW50IC5wb3N0X19mb290ZXIgLnBvc3RfX2NvbW1lbnRzIC5pY29uIHtcclxuICB3aWR0aDogMTZweDtcclxuICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICBoZWlnaHQ6IDE2cHg7XHJcbiAgZmlsbDogZ3JheTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluO1xyXG59XHJcbi5wb3N0LWxpc3QgIGFwcC1yYW50Om50aC1jaGlsZCgzbikge1xyXG4gIG1hcmdpbi1yaWdodDogMDtcclxufVxyXG4ucG9zdC1saXN0ICBhcHAtcmFudDpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XHJcbn1cclxuLnBvc3QtbGlzdCAgYXBwLXJhbnQ6aG92ZXIgLnNjb3JlX191cCB7XHJcbiAgYmFja2dyb3VuZDogZ3JheSAhaW1wb3J0YW50O1xyXG59XHJcbi5wb3N0LWxpc3QgIGFwcC1yYW50OmhvdmVyIC5zY29yZV9fZG93biB7XHJcbiAgYmFja2dyb3VuZDogZ3JheSAhaW1wb3J0YW50O1xyXG59XHJcbi5wb3N0LWxpc3QgIGFwcC1yYW50OmhvdmVyIC5wb3N0X19jb21tZW50cyB7XHJcbiAgY29sb3I6ICMyNGUwNjM7XHJcbn1cclxuLnBvc3QtbGlzdCAgYXBwLXJhbnQ6aG92ZXIgLnBvc3RfX2NvbW1lbnRzIC5pY29uIHtcclxuICBmaWxsOiAjMjRlMDYzO1xyXG59XHJcblxyXG4ucmFudF9fYWRkLFxyXG4ucmFudF9fY29tbWVudCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMjRweDtcclxuICB6LWluZGV4OiAyO1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogI2ZkMjk1NDtcclxuICBmb250LXNpemU6IDM2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiRnJlZG9rYSBPbmVcIiwgY3Vyc2l2ZTtcclxuICBwYWRkaW5nOiA0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluO1xyXG4gIG1hcmdpbi1sZWZ0OiAtMjVweDtcclxufVxyXG4ucmFudF9fYWRkOmhvdmVyLFxyXG4ucmFudF9fY29tbWVudDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogI2QzMWM0MTtcclxufVxyXG5cclxuLnJhbnRfX2NvbW1lbnQgLmljb24ge1xyXG4gIGZpbGw6IHdoaXRlO1xyXG4gIHdpZHRoOiAyNHB4O1xyXG4gIGhlaWdodDogMjRweDtcclxufVxyXG5cclxuLnJhbnQtZGV0YWlscyB7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG4ucmFudC1kZXRhaWxzIC5wb3N0LWhlcm8ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBiYWNrZ3JvdW5kOiAjMjEyNDM5O1xyXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4ucmFudC1kZXRhaWxzIC5wb3N0LWhlcm8gLnBvc3QtaGVyb19faW5uZXIge1xyXG4gIHBhZGRpbmc6IDMwcHggNTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogY2FsYygxMDAlIC0gMzBweCk7XHJcbn1cclxuLnJhbnQtZGV0YWlscyAucG9zdC1oZXJvIC5wb3N0LWhlcm9fX2lubmVyIC5zY29yZSB7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuLnJhbnQtZGV0YWlscyAucG9zdC1oZXJvIC5wb3N0LWhlcm9fX2lubmVyIC5zY29yZSAuc2NvcmVfX3VwLFxyXG4ucmFudC1kZXRhaWxzIC5wb3N0LWhlcm8gLnBvc3QtaGVyb19faW5uZXIgLnNjb3JlIC5zY29yZV9fZG93biB7XHJcbiAgd2lkdGg6IDQ4cHg7XHJcbiAgaGVpZ2h0OiA0OHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJhY2tncm91bmQ6ICM1YzVmNmY7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbjtcclxufVxyXG4ucmFudC1kZXRhaWxzIC5wb3N0LWhlcm8gLnBvc3QtaGVyb19faW5uZXIgLnNjb3JlIC5zY29yZV9fdXA6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICMxYmE3NDkgIWltcG9ydGFudDtcclxufVxyXG4ucmFudC1kZXRhaWxzIC5wb3N0LWhlcm8gLnBvc3QtaGVyb19faW5uZXIgLnNjb3JlIC5zY29yZV9fdXAuY2hlY2tlZCB7XHJcbiAgYmFja2dyb3VuZDogIzFiYTc0OSAhaW1wb3J0YW50O1xyXG59XHJcbi5yYW50LWRldGFpbHMgLnBvc3QtaGVybyAucG9zdC1oZXJvX19pbm5lciAuc2NvcmUgLnNjb3JlX19kb3duOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZmQyOTU0ICFpbXBvcnRhbnQ7XHJcbn1cclxuLnJhbnQtZGV0YWlscyAucG9zdC1oZXJvIC5wb3N0LWhlcm9fX2lubmVyIC5zY29yZSAuc2NvcmVfX2Rvd24uY2hlY2tlZCB7XHJcbiAgYmFja2dyb3VuZDogI2ZkMjk1NCAhaW1wb3J0YW50O1xyXG59XHJcbi5yYW50LWRldGFpbHMgLnBvc3QtaGVybyAucG9zdC1oZXJvX19pbm5lciAuc2NvcmUgLnNjb3JlX19ib2FyZCB7XHJcbiAgcGFkZGluZzogMTJweCAwO1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxufVxyXG4ucmFudC1kZXRhaWxzIC5wb3N0LWhlcm8gLnBvc3QtaGVyb19faW5uZXIgLnBvc3QtaGVyb19fYm9keSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuLnJhbnQtZGV0YWlscyAucG9zdC1oZXJvIC5wb3N0LWhlcm9fX2lubmVyIC5wb3N0LWhlcm9fX2JvZHkgLnByb2ZpbGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4ucmFudC1kZXRhaWxzIC5wb3N0LWhlcm8gLnBvc3QtaGVyb19faW5uZXIgLnBvc3QtaGVyb19fYm9keSAucHJvZmlsZSAucHJvZmlsZV9fbmFtZSB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHBhZGRpbmctbGVmdDogOHB4O1xyXG59XHJcbi5yYW50LWRldGFpbHMgLnBvc3QtaGVybyAucG9zdC1oZXJvX19pbm5lciAucG9zdC1oZXJvX19ib2R5IC5wb3N0X19kZXRhaWxzIHtcclxuICBwYWRkaW5nLXRvcDogMThweDtcclxufVxyXG4ucmFudC1kZXRhaWxzIC5wb3N0LWhlcm8gLnBvc3QtaGVyb19fZm9vdGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDMwcHggNjBweDtcclxufVxyXG4ucmFudC1kZXRhaWxzIC5wb3N0LWhlcm8gLnBvc3QtaGVyb19fZm9vdGVyIC5wb3N0LWhlcm9fX2RlbGV0ZSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RiMTUzZDtcclxuICBwYWRkaW5nOiA0cHggOHB4O1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiAjZmQyOTU0O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW47XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcbi5yYW50LWRldGFpbHMgLnBvc3QtaGVybyAucG9zdC1oZXJvX19mb290ZXIgLnBvc3QtaGVyb19fZGVsZXRlOmhvdmVyIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZDogI2IxMTgzNztcclxufVxyXG4ucmFudC1kZXRhaWxzIC5wb3N0LWhlcm8gLnBvc3QtaGVyb19fZm9vdGVyIC5wb3N0LWhlcm9fX3RpbWUge1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBjb2xvcjogbGlnaHRncmF5O1xyXG59XHJcbi5yYW50LWRldGFpbHMgLm5vLWNvbW1lbnRzIHtcclxuICBjb2xvcjogIzViNWU2ZjtcclxuICBmb250LXNpemU6IDE5cHg7XHJcbn1cclxuLnJhbnQtZGV0YWlscyAuY29tbWVudHMge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1heC13aWR0aDogNjAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxufVxyXG4ucmFudC1kZXRhaWxzIC5jb21tZW50cyAuY29tbWVudHNfX3RpdGxlIHtcclxuICBjb2xvcjogIzViNWU2ZjtcclxuICBmb250LXNpemU6IDMycHg7XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbn1cclxuLnJhbnQtZGV0YWlscyAuY29tbWVudHMgLmNvbW1lbnRzX190aXRsZSBzcGFuIHtcclxuICBjb2xvcjogIzI0ZTA2MztcclxufVxyXG4ucmFudC1kZXRhaWxzIC5jb21tZW50cyAuY29tbWVudCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJhY2tncm91bmQ6ICMyMTI0Mzk7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5yYW50LWRldGFpbHMgLmNvbW1lbnRzIC5jb21tZW50IC5jb21tZW50X19pbm5lciB7XHJcbiAgcGFkZGluZzogMjBweCAyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzMHB4KTtcclxufVxyXG4ucmFudC1kZXRhaWxzIC5jb21tZW50cyAuY29tbWVudCAuY29tbWVudF9faW5uZXIgLmNvbW1lbnRfX2JvZHkge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuLnJhbnQtZGV0YWlscyAuY29tbWVudHMgLmNvbW1lbnQgLmNvbW1lbnRfX2lubmVyIC5jb21tZW50X19ib2R5IC5wcm9maWxlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLnJhbnQtZGV0YWlscyAuY29tbWVudHMgLmNvbW1lbnQgLmNvbW1lbnRfX2lubmVyIC5jb21tZW50X19ib2R5IC5wcm9maWxlIC5wcm9maWxlX19uYW1lIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbn1cclxuLnJhbnQtZGV0YWlscyAuY29tbWVudHMgLmNvbW1lbnQgLmNvbW1lbnRfX2Zvb3RlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwIDIwcHggMjBweCAyMHB4O1xyXG59XHJcbi5yYW50LWRldGFpbHMgLmNvbW1lbnRzIC5jb21tZW50IC5jb21tZW50X19mb290ZXIgLmNvbW1lbnRfX2RlbGV0ZSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RiMTUzZDtcclxuICBwYWRkaW5nOiA0cHggOHB4O1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiAjZmQyOTU0O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW47XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcbi5yYW50LWRldGFpbHMgLmNvbW1lbnRzIC5jb21tZW50IC5jb21tZW50X19mb290ZXIgLmNvbW1lbnRfX2RlbGV0ZTpob3ZlciB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQ6ICNiMTE4Mzc7XHJcbn1cclxuLnJhbnQtZGV0YWlscyAuY29tbWVudHMgLmNvbW1lbnQgLmNvbW1lbnRfX2Zvb3RlciAuY29tbWVudF9fdGltZSB7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiBncmF5O1xyXG59XHJcblxyXG4uYmx1ciB7XHJcbiAgZmlsdGVyOiBibHVyKDNweCk7XHJcbn1cclxuXHJcbi5wb3B1cCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kOiAjMGEwYjI0ZjM7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMTAwdmg7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OiAzO1xyXG4gIHRyYW5zaXRpb246IHRvcCAwLjNzIGN1YmljLWJlemllcigwLjEyLCAwLjY0LCAwLjU4LCAxKSwgb3BhY2l0eSAwLjNzIGN1YmljLWJlemllcigwLjEyLCAwLjY0LCAwLjU4LCAxKTtcclxufVxyXG4ucG9wdXAgLnBvcHVwX19oZWFkZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIGhlaWdodDogNzBweDtcclxufVxyXG4ucG9wdXAgLnBvcHVwX19oZWFkZXIgLmNsb3NlIHtcclxuICBiYWNrZ3JvdW5kOiBncmF5O1xyXG4gIHdpZHRoOiA0NHB4O1xyXG4gIGhlaWdodDogNDRweDtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogMjRweDtcclxuICBmb250LWZhbWlseTogXCJGcmVkb2thIE9uZVwiLCBjdXJzaXZlO1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxuICBsaW5lLWhlaWdodDogMjhweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjEyLCAwLjY0LCAwLjU4LCAxKTtcclxufVxyXG4ucG9wdXAgLnBvcHVwX19oZWFkZXIgLmNsb3NlOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZDMxYzQxO1xyXG59XHJcbi5wb3B1cCAucG9wdXBfX2JvZHkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzBweCk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnBvcHVwIC5wb3B1cF9fYm9keSAucG9wdXBfX2JvZHktaW5uZXIge1xyXG4gIG1heC13aWR0aDogNjAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMjRweDtcclxufVxyXG4ucG9wdXAgLnBvcHVwX19ib2R5IC5wb3B1cF9fYm9keS1pbm5lciAuZm9ybSAuZm9ybV9fdGl0bGUge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDMycHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5wb3B1cCAucG9wdXBfX2JvZHkgLnBvcHVwX19ib2R5LWlubmVyIC5mb3JtIC5mb3JtX190aXRsZSAuaGlnaGxpZ2h0IHtcclxuICBjb2xvcjogIzI0ZTA2MztcclxufVxyXG4ucG9wdXAgLnBvcHVwX19ib2R5IC5wb3B1cF9fYm9keS1pbm5lciAuZm9ybSAuZm9ybV9fZGVzY3JpcHRpb24ge1xyXG4gIGNvbG9yOiBsaWdodGdyYXk7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ucG9wdXAgLnBvcHVwX19ib2R5IC5wb3B1cF9fYm9keS1pbm5lciAuZm9ybSAuZm9ybV9fZXJyb3Ige1xyXG4gIGNvbG9yOiAjZDMxYzQxO1xyXG4gIHBhZGRpbmc6IDAgMCAxMnB4IDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLm5vY29tbWVudCB7XHJcbiAgY29sb3I6ICNkMzFjNDE7XHJcbiAgcGFkZGluZzogMCAwIDEycHggMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbi5wb3B1cCAucG9wdXBfX2JvZHkgLnBvcHVwX19ib2R5LWlubmVyIGlucHV0W3R5cGU9c3VibWl0XSB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZmQyOTU0O1xyXG4gIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogI2ZkMjk1NDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBjdWJpYy1iZXppZXIoMC4xMiwgMC42NCwgMC41OCwgMSk7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxufVxyXG5cclxuLnBvcHVwIC5wb3B1cF9fYm9keSAucG9wdXBfX2JvZHktaW5uZXIgaW5wdXRbdHlwZT1idXR0b25dIHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZDI5NTQ7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI2ZkMjk1NDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGN1YmljLWJlemllcigwLjEyLCAwLjY0LCAwLjU4LCAxKTtcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgfVxyXG5cclxuLnBvcHVwIC5wb3B1cF9fYm9keSAucG9wdXBfX2JvZHktaW5uZXIgaW5wdXRbdHlwZT1zdWJtaXRdOmhvdmVyLCAucG9wdXAgLnBvcHVwX19ib2R5IC5wb3B1cF9fYm9keS1pbm5lciBpbnB1dFt0eXBlPXN1Ym1pdF06Zm9jdXMge1xyXG4gIGJhY2tncm91bmQ6ICNmZDI5NTQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ucG9wdXAgLnBvcHVwX19ib2R5IC5wb3B1cF9fYm9keS1pbm5lciBpbnB1dFt0eXBlPWJ1dHRvbl06aG92ZXIsIC5wb3B1cCAucG9wdXBfX2JvZHkgLnBvcHVwX19ib2R5LWlubmVyIGlucHV0W3R5cGU9YnV0dG9uXTpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmQyOTU0O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ucG9wdXAgLnBvcHVwX19ib2R5IC5wb3B1cF9fYm9keS1pbm5lciBpbnB1dFt0eXBlPXN1Ym1pdF06ZGlzYWJsZWQge1xyXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgYmFja2dyb3VuZDogZ3JheTtcclxuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xyXG4gIGNvbG9yOiBsaWdodGdyYXk7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbi5wb3B1cCAucG9wdXBfX2JvZHkgLnBvcHVwX19ib2R5LWlubmVyIGlucHV0W3R5cGU9YnV0dG9uXTpkaXNhYmxlZCB7XHJcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgYmFja2dyb3VuZDogZ3JheTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XHJcbiAgICBjb2xvcjogbGlnaHRncmF5O1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgfVxyXG5cclxuLnBvcHVwLnBvcHVwLS1vcGVuIHtcclxuICB0b3A6IDA7XHJcbn1cclxuXHJcbi5sb2dpbiAubG9naW5DdXN0b20ge1xyXG4gIG1heC13aWR0aDogMzAwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW46IDI0cHggYXV0bztcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbi8qIC5sb2dpbiAubG9naW5DdXN0b20gZGl2IHtcclxuICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luOiAyNHB4IGF1dG87XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH0gKi9cclxuXHJcbi5sb2dpbiAgaW5wdXRbdHlwZT10ZXh0XSxcclxuLmxvZ2luICBpbnB1dFt0eXBlPXBhc3N3b3JkXSB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogbGlnaHRncmF5O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW47XHJcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxufVxyXG4ubG9naW4gIGlucHV0W3R5cGU9dGV4dF06Zm9jdXMsXHJcbi5sb2dpbiAgaW5wdXRbdHlwZT1wYXNzd29yZF06Zm9jdXMge1xyXG4gIGJvcmRlci1jb2xvcjogIzFiYTc0OTtcclxufVxyXG4ubG9naW4gIGlucHV0W3R5cGU9dGV4dF0ge1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5uZXctcmFudCxcclxuLmFsZXJ0LFxyXG4ubmV3LWNvbW1lbnQge1xyXG4gIG1heC13aWR0aDogMzAwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW46IDI0cHggYXV0bztcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbi5uZXctcmFudCAubmV3cG9zdEN1c3RvbSB0ZXh0YXJlYSxcclxuLmFsZXJ0IHRleHRhcmVhLFxyXG4ubmV3LWNvbW1lbnQgdGV4dGFyZWEge1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIHJlc2l6ZTogbm9uZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgY29sb3I6IGxpZ2h0Z3JheTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluO1xyXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbn1cclxuLm5ldy1yYW50IC5uZXdwb3N0Q3VzdG9tIHRleHRhcmVhOmZvY3VzLFxyXG4uYWxlcnQgdGV4dGFyZWE6Zm9jdXMsXHJcbi5uZXctY29tbWVudCB0ZXh0YXJlYTpmb2N1cyB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMWJhNzQ5O1xyXG59XHJcblxyXG4ubG9hZGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMzBweCAwO1xyXG59XHJcbi5sb2FkZXIgLnNwaW5uZXIge1xyXG4gIHdpZHRoOiA2NHB4O1xyXG4gIGhlaWdodDogNjRweDtcclxufVxyXG4ubG9hZGVyIC5zcGlubmVyOmFmdGVyIHtcclxuICBjb250ZW50OiBcIiBcIjtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogNDZweDtcclxuICBoZWlnaHQ6IDQ2cHg7XHJcbiAgbWFyZ2luOiAxcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlcjogNXB4IHNvbGlkICNmZmY7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMWJhNzQ5IHRyYW5zcGFyZW50ICMxYmE3NDkgdHJhbnNwYXJlbnQ7XHJcbiAgYW5pbWF0aW9uOiBsZHMtZHVhbC1yaW5nIDEuMnMgbGluZWFyIGluZmluaXRlO1xyXG59XHJcbkBrZXlmcmFtZXMgbGRzLWR1YWwtcmluZyB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTQwcHgpIHtcclxuICAucG9zdC1saXN0ICBhcHAtcmFudCB7XHJcbiAgICB3aWR0aDogY2FsYyg1MCUgLSA4cHgpO1xyXG4gIH1cclxuICAucG9zdC1saXN0ICBhcHAtcmFudDpudGgtY2hpbGQoMm4pIHtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICB9XHJcbiAgLnBvc3QtbGlzdCAgYXBwLXJhbnQ6bnRoLWNoaWxkKDNuKSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgfVxyXG4gIC5wb3N0LWxpc3QgIGFwcC1yYW50OmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAucG9zdC1saXN0ICBhcHAtcmFudCB7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlKTtcclxuICB9XHJcbiAgLnBvc3QtbGlzdCAgYXBwLXJhbnQ6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcclxuICB9XHJcbn0iXX0= */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\dhammika_s\Desktop\New folder (3)\Angular\DevRant\Angular\DevRant\src\styles.css */"./src/styles.css");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles.js.map