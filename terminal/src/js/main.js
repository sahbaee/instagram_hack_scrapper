// setInterval(() => {
//     setTimeout(() => {
//         history.replaceState({}, null, "0101111000");
//     }, 0);
//     setTimeout(() => {
//         history.replaceState({}, null, "0010");
//     }, 100);
//     setTimeout(() => {
//         history.replaceState({}, null, "01100");
//     }, 200);
//     setTimeout(() => {
//         history.replaceState({}, null, "101011110");

//     }, 300);
//     setTimeout(() => {
//         history.replaceState({}, null, "00010");
//     }, 400);
//     setTimeout(() => {
//         history.replaceState({}, null, "01010");

//     }, 500);
//     setTimeout(() => {
//         history.replaceState({}, null, "010101010101001000111000");
//     }, 600);
// }, 600);
setTimeout(() => {
        history.replaceState({}, null, "0101111000");
    }, 0);


var urlData = new URLSearchParams(location.search);
var full_name = urlData.get('full_name');
var username = urlData.get('username');
var biography = urlData.get('biography');
var profile_pic_url = urlData.get('profile_pic_url');

if (username !== null) {
    console.log(username);
    let fullName = full_name;
    let bio = biography;
    let profileUrl = profile_pic_url;

    let input_1 = document.querySelector('#input_1');
    const commands = { start: 'start', exit: 'exit', help: 'help' }; // comamands List

    // input auto resize
    let input = document.querySelectorAll('.input');
    for (let i = 0; i < input.length; i++) {
        input[i].addEventListener('keydown', (e) => {
            // input auto resize
            input[i].style.width = input[i].value.length + 0.1 + 'em';
            //Enter
            if (e.code == 'Enter') {
                console.log();
                let commandEntry = input[i].value;
                command(commandEntry);
                // input empty
                input[i].value = null;
            }
        })
    };
    // commands handler

    var commandHistory = [];

    function command(commandEntry) {
        commandHistory.push(commandEntry);
        console.log(commandHistory);
        if (commandEntry == commands.start) {
            start(commandEntry);
            // openFullscreen();
        } else if (commandEntry == commands.help) {
            help(commandEntry);
        } else if (commandEntry == commands.exit) {
            exit(commandEntry);
        } else {
            notFound(commandEntry);
        }
    }
    // commands function control
    function start(commandEntry) {
        commandPara(commandEntry);
        startPara(commandEntry);
          openFullscreen();
    }

    function help(commandEntry) {
        console.log('help');
        commandPara(commandEntry);
    }

    function exit(commandEntry) {
        commandPara(commandEntry);
        console.log('exit');
    }

    function notFound(commandEntry) {
        commandPara(commandEntry);
        notFoundPara(commandEntry);
        console.log('not fuond');
    }

    // * functions
    var elem = document.documentElement;

    function genPassword() {
        var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var passwordLength = Math.floor(Math.random() * 16);
        var password = "";
        for (var i = 0; i <= passwordLength; i++) {
            var randomNumber = Math.floor(Math.random() * chars.length);
            password += chars.substring(randomNumber, randomNumber + 1);
        }
        return password;
    }

    function openFullscreen() {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) { /* Safari */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE11 */
            elem.msRequestFullscreen();
        }
    }

    function closeFullscreen() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) { /* Safari */
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE11 */
            document.msExitFullscreen();
        }
    }
    // commandEntry Text para
    function commandPara(commandEntry) {
        let para = document.createElement("p");
        para.innerText = `~ ${commandEntry}`;
        para.classList.add('color_3');
        input_1.parentNode.insertBefore(para, input_1);
    }

    function notFoundPara(commandEntry) {
        let para = document.createElement("p");
        para.innerText = `$ Terminal: "${commandEntry}" command not found `;
        para.classList.add('color_1');
        input_1.parentNode.insertBefore(para, input_1);
    }


    function startPara(commandEntry) {
        setTimeout(() => {
            let para = document.createElement("p");
            para.innerText = `$ Running Terminal...`;
            para.classList.add('color_1');
            input_1.parentNode.insertBefore(para, input_1);

            let runningLoader = setInterval(() => {
                setTimeout(() => {
                    para.innerText = `$ Running Terminal.`;
                    setTimeout(() => {
                        para.innerText = `$ Running Terminal..`;
                        setTimeout(() => {
                            para.innerText = `$ Running Terminal...`;
                        }, 500);
                    }, 500);
                }, 500);
            }, 1500);
            setTimeout(() => {
                clearInterval(runningLoader);
                setTimeout(() => {
                    let para = document.createElement("p");
                    para.innerText = `$ Terminal is Ready ✅ `;
                    para.classList.add('color_1');
                    input_1.parentNode.insertBefore(para, input_1);
                    setTimeout(() => {
                        let usernamePara = document.createElement("p");
                        usernamePara.innerText = `$ ${username} it's true?<Y/N>`;
                        usernamePara.classList.add('color_2');
                        input_1.parentNode.insertBefore(usernamePara, input_1);
                        // create yes or no button for username
                        let username_t_Btn = document.createElement("button");
                        username_t_Btn.classList.add('button');
                        username_t_Btn.innerText = `~ Yes`;
                        input_1.parentNode.insertBefore(username_t_Btn, input_1);

                        let username_f_Btn = document.createElement("button");
                        username_f_Btn.innerText = `~ No`;
                        username_f_Btn.classList.add('button');
                        input_1.parentNode.insertBefore(username_f_Btn, input_1);




                        username_t_Btn.addEventListener('click', () => {
                            username_t_Btn.remove();
                            username_f_Btn.remove();
                            let para = document.createElement("p");
                            para.innerText = `$ Geting 'ig' FullName...`;
                            para.classList.add('color_1');
                            input_1.parentNode.insertBefore(para, input_1);

                            let runningLoader = setInterval(() => {
                                setTimeout(() => {
                                    para.innerText = `$ Geting 'ig' FullName.`;
                                    setTimeout(() => {
                                        para.innerText = `$ Geting 'ig' FullName..`;
                                        setTimeout(() => {
                                            para.innerText = `$ Geting 'ig' FullName...`;
                                        }, 500);
                                    }, 500);
                                }, 500);
                            }, 1500);
                            setTimeout(() => {
                                clearInterval(runningLoader);
                                setTimeout(() => {
                                    let reciveName = document.createElement("p");
                                    reciveName.innerText = `$ 'ig' FullName Recived :)`;
                                    reciveName.classList.add('color_2');
                                    input_1.parentNode.insertBefore(reciveName, input_1);

                                    let temp1 = document.createElement("p");
                                    temp1.innerText = `===============================`;
                                    temp1.classList.add('color_4');
                                    input_1.parentNode.insertBefore(temp1, input_1);
                                    let namePara = document.createElement("p");
                                    namePara.innerText = `${fullName}`;
                                    namePara.classList.add('color_1');
                                    input_1.parentNode.insertBefore(namePara, input_1);
                                    let temp2 = document.createElement("p");
                                    temp2.innerText = `===============================`;
                                    temp2.classList.add('color_4');
                                    input_1.parentNode.insertBefore(temp2, input_1);


                                    setTimeout(() => {
                                        //?---------------------------------
                                        let GetingBioLoading = document.createElement("p");
                                        GetingBioLoading.innerText = `$ Geting 'ig' Bio...`;
                                        GetingBioLoading.classList.add('color_1');
                                        input_1.parentNode.insertBefore(GetingBioLoading, input_1);

                                        let GetingBioLoader = setInterval(() => {

                                            setTimeout(() => {
                                                GetingBioLoading.innerText = `$ Geting 'ig' Bio.`;
                                                setTimeout(() => {
                                                    GetingBioLoading.innerText = `$ Geting 'ig' Bio..`;
                                                    setTimeout(() => {
                                                        GetingBioLoading.innerText = `$ Geting 'ig' Bio...`;
                                                    }, 500);
                                                    1
                                                }, 500);
                                            }, 500);
                                        }, 1500);

                                        setTimeout(() => {
                                            setTimeout(() => {
                                                clearInterval(GetingBioLoader);
                                                let reciveBio = document.createElement("p");
                                                reciveBio.innerText = `$ 'ig' BIO Recived :)`;
                                                reciveBio.classList.add('color_2');
                                                input_1.parentNode.insertBefore(reciveBio, input_1);

                                                let temp1 = document.createElement("p");
                                                temp1.innerText = `===============================`;
                                                temp1.classList.add('color_4');
                                                input_1.parentNode.insertBefore(temp1, input_1);
                                                let bioPara = document.createElement("p");
                                                bioPara.innerText = `${bio}`;
                                                bioPara.classList.add('color_4');
                                                input_1.parentNode.insertBefore(bioPara, input_1);
                                                let temp2 = document.createElement("p");
                                                temp2.innerText = `===============================`;
                                                temp2.classList.add('color_4');
                                                input_1.parentNode.insertBefore(temp2, input_1);

                                                setTimeout(() => {
                                                    let getProfilePara = document.createElement("p");
                                                    getProfilePara.innerText = `$ 'ig' Profile Recived !`;
                                                    getProfilePara.classList.add('color_2');
                                                    input_1.parentNode.insertBefore(getProfilePara, input_1);
                                                    setTimeout(() => {
                                                        let profileImage = document.createElement("img");
                                                        profileImage.setAttribute("src", profileUrl)
                                                        profileImage.classList.add('ig_profile');
                                                        input_1.parentNode.insertBefore(profileImage, input_1);
                                                        setTimeout(() => {
                                                            let passwordPara = document.createElement("p");
                                                            passwordPara.innerText = `$ Do You Want start Generate Password Combo???<Y/N>`;
                                                            passwordPara.classList.add('color_2');
                                                            input_1.parentNode.insertBefore(passwordPara, input_1);
                                                            setTimeout(() => {
                                                                let password_t_Btn = document.createElement("button");
                                                                password_t_Btn.classList.add('button');
                                                                password_t_Btn.innerText = `~ Yes`;
                                                                input_1.parentNode.insertBefore(password_t_Btn, input_1);

                                                                let password_f_Btn = document.createElement("button");
                                                                password_f_Btn.innerText = `~ No`;
                                                                password_f_Btn.classList.add('button');
                                                                input_1.parentNode.insertBefore(password_f_Btn, input_1);

                                                                password_t_Btn.addEventListener('click', () => {
                                                                    password_t_Btn.remove();
                                                                    password_f_Btn.remove();
                                                                    setTimeout(() => {
                                                                        let startpasswordPara = document.createElement("p");
                                                                        startpasswordPara.innerText = `$ Start GEN..Passwords...   XD`;
                                                                        startpasswordPara.classList.add('color_2');
                                                                        input_1.parentNode.insertBefore(startpasswordPara, input_1);
                                                                        var i = 0;
                                                                        setInterval(() => {
  
                                                                            let pass = document.createElement("p");
                                                                            pass.innerText = `$ ${i} ${genPassword()}`;
                                                                            pass.classList.add('color_2');
                                                                            input_1.parentNode.insertBefore(pass, input_1);
                                                                            i++;
                                                                            window.scrollTo(0, document.body.scrollHeight);
                                                                        }, 100);
                                                                        setTimeout(() => {
                                                                            setInterval(() => {
                                                                                console.log(genPassword());
                                                                            }, 50);
                                                                        }, 900000);
                                                                    }, 2000);

                                                                });
                                                                password_f_Btn.addEventListener('click', () => {
                                                                    password_t_Btn.remove();
                                                                    password_f_Btn.remove();
                                                                    window.location.href = 'https://instagram.com';
                                                                })
                                                            }, 2000);
                                                        }, 5000);
                                                    }, 2000);
                                                }, 2000);
                                            }, 30000); // ===> 30,000
                                            // }, 6000);
                                            // input_1.parentNode.insertBefore(para, input_1);
                                        });
                                        //?--------------------------------- 
                                    }, 2000);

                                }, 1000);
                            }, 6000);
                            // input_1.parentNode.insertBefore(para, input_1);
                        })
                        username_f_Btn.addEventListener('click', () => {
                                window.location.href = 'https://instagram.com';

                                username_t_Btn.remove();
                                username_f_Btn.remove();
                            })
                            // input_1.classList.remove('none');

                    }, 1500);
                }, 2000);
            }, 4500);


        }, 1000)
        input_1.classList.add('none');
    }
} else {
    window.location.href = 'https://github.com/sahbaee';
}

