const string = `
/* 查小猪，现在司宇要用代码画一只你最喜欢的佩奇送给你 */
body {
    background-color: #87B9F6;
    overflow: hidden;
}

#peppa {
    position: absolute;
    top: 75%;
    left: 55%;
    width: 300px;
    margin-left: -150px;
    margin-top: -100px;
}

#peppa * {
    position: absolute;
}

/* 首先画一下佩奇的脸 */
.top_of_face {
    top: -107px;
    left: 30px;
    height: 150px;
    width: 147px;
    background-color: #fec6df;
    border: 7px solid #fa91b6;
    border-bottom-left-radius: 220px;
    border-top-right-radius: 350px;
    border-bottom-right-radius: 235px;
    border-top-left-radius: 180px;
    -ms-transform: rotate(-18deg) rotateY(180deg);
    -webkit-transform: rotate(-18deg) rotateY(180deg);
    transform: rotate(-18deg) rotateY(180deg);
}

.bottom_of_face_1,
.bottom_of_face_2 {
    top: -69px;
    left: 39px;
    height: 121px;
    width: 149px;
    background-color: #fec6df;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    -ms-transform: rotate(178deg);
    -webkit-transform: rotate(178deg);
    transform: rotate(178deg);
}

.bottom_of_face_1 {
    border: 7px solid #fa91b6;
    border-bottom: 7px solid transparent;
    z-index: 2;
}

.bottom_of_face_2 {
    border: 7px solid #fa91b6;
    border-bottom: 7px solid transparent;
    z-index: 1;
}

/* 接着是佩奇的鼻子和眼睛 */
.bottom_of_nose,
.top_of_nose {
    background-color: #fec6df;
    -moz-border-radius: 50% 50% 50% 50% / 100% 100% 0% 0%;
    -webkit-border-radius: 50% 50% 50% 50% / 100% 100% 0% 0%;
    border-radius: 50% 50% 50% 50% / 100% 100% 0% 0%;
}

.bottom_of_nose {
    top: -108px;
    left: 164px;
    width: 60px;
    height: 76px;
    border-left: 7px solid #fa91b6;
    border-top: 7px solid #fa91b6;
    -ms-transform: rotate(-102deg) rotateX(180deg);
    -webkit-transform: rotate(-102deg) rotateX(180deg);
    transform: rotate(-102deg) rotateX(180deg);
    ;
}

.top_of_nose {
    top: -145px;
    left: 144px;
    width: 68px;
    height: 105px;
    border-right: 7px solid #fa91b6;
    border-top: 6px solid #fa91b6;
    border-left: 2px solid transparent;
    -ms-transform: rotate(-104deg) rotateX(180deg);
    -webkit-transform: rotate(-104deg) rotateX(180deg);
    transform: rotate(-104deg) rotateX(180deg);
}

.center_of_nose {
    top: -128px;
    left: 189px;
    height: 58px;
    width: 42px;
    background-color: #fec6df;
    border: 7px solid #fa91b6;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    -ms-transform: rotate(29deg);
    -webkit-transform: rotate(29deg);
    transform: rotate(-26deg);
    z-index: 3;
}

.center_of_nose:before,
.center_of_nose:after {
    position: absolute;
    content: "";
    width: 11px;
    height: 12px;
    background-color: #fa91b6;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    -ms-transform: rotate(-39deg);
    -webkit-transform: rotate(-39deg);
    transform: rotate(-39deg);
}

.center_of_nose:before {
    top: 24px;
    left: 7px;
}

.center_of_nose:after {
    top: 19px;
    right: 8px;
}

.eyes:before,
.eyes:after {
    position: absolute;
    content: "";
    background-color: #FDFDFD;
    border: 5px solid #FDFDFD;
    -moz-border-radius: 47%;
    -webkit-border-radius: 47%;
    border-radius: 47%;
    z-index: 2;
}

.eyes:before {
    top: -98px;
    left: 143px;
    width: 11px;
    height: 12px;
}

.eyes:after {
    top: -85px;
    left: 105px;
    width: 12px;
    height: 13px;
    -ms-transform: rotate(-20deg);
    -webkit-transform: rotate(-20deg);
    transform: rotate(-20deg);
}

.right_pupil,
.left_pupil {

    height: 13px;
    width: 13px;
    background-color: #000;
    -moz-border-radius: 47%;
    -webkit-border-radius: 47%;
    border-radius: 56%;
    -ms-transform: rotate(40deg);
    -webkit-transform: rotate(40deg);
    transform: rotate(40deg);
    z-index: 3;
}

.left_pupil {
    top: -92px;
    left: 144px;
}

.right_pupil {
    top: -78px;
    left: 107px;
}

.right_eye_socket,
.left_eye_socket {
    width: 35px;
    height: 35px;
    background-color: #fa91b6;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
}

.right_eye_socket {
    top: -91px;
    left: 99px;
    -ms-transform: rotate(-35deg);
    -webkit-transform: rotate(-35deg);
    transform: rotate(-35deg);
    z-index: 2;
}

.left_eye_socket {
    top: -105px;
    left: 136px;
    z-index: 1;
}

/* 加上耳朵，就可以听到世界上最动听的声音啦！ */
.left_ear,
.right_ear {
    height: 44px;
    background-color: #fec6df;
    border: 7px solid #fa91b6;
    -moz-border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
    -webkit-border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
    border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
    z-index: -1;
}

.left_ear {
    top: -147px;
    left: 81px;
    width: 21px;
    -ms-transform: rotate(163deg);
    -webkit-transform: rotate(163deg);
    transform: rotate(163deg);
}

.right_ear {
    top: -123px;
    left: 41px;
    width: 23px;
    -ms-transform: rotate(141deg);
    -webkit-transform: rotate(141deg);
    transform: rotate(141deg);
}

/* 给脸部美美容，就可以像查璐璐一样好看了 */
.part_of_nose {
    top: -55px;
    left: 169px;
    width: 5px;
    height: 1px;
    background-color: #fec6df;
    border: 9px solid #fec6df;
    -moz-border-radius: 50px;
    -webkit-border-radius: 50px;
    border-radius: 50px;
    transform: rotate(-27deg);
    z-index: 2;
}

.part_of_face_1,
.part_of_face_2 {
    background-color: transparent;
    border-bottom: 16px solid #fec6df;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    z-index: 6;
}

.part_of_face_1 {
    top: -34px;
    left: 27px;
    width: 85px;
    height: 40px;
    -ms-transform: rotate(-278.5deg);
    -webkit-transform: rotate(-278.5deg);
    transform: rotate(-278.5deg);
}

.part_of_face_2 {
    top: -39px;
    left: 35px;
    width: 49px;
    height: 17px;
    -ms-transform: rotate(107deg);
    -webkit-transform: rotate(107deg);
    transform: rotate(107deg);
}

.cheek {
    top: -41px;
    left: 62px;
    width: 25px;
    height: 25px;
    background-color: #fa91b6;
    border: 11px solid #fa91b6;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    -ms-transform: rotate(24deg);
    -webkit-transform: rotate(24deg);
    transform: rotate(24deg);
    z-index: 6;
}

/* 有了嘴巴，才能吃到冰淇淋！ */
.left_of_mouth_2,
.right_of_mouth_2,
.bottom_of_mouth,
.top_of_mouth {
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    z-index: 2;
}

.left_of_mouth_2 {
    top: -13px;
    left: 176px;
    width: 7px;
    height: 14px;
    background-color: #e71e62;
    -ms-transform: rotate(16deg);
    -webkit-transform: rotate(16deg);
    transform: rotate(16deg);
    z-index: 10;
}

.right_of_mouth_2 {
    top: 7px;
    left: 117px;
    width: 17px;
    height: 7px;
    background-color: #e71e62;
    -ms-transform: rotate(40deg);
    -webkit-transform: rotate(40deg);
    transform: rotate(40deg);
    z-index: 10;
}

.bottom_of_mouth {
    top: -59px;
    left: 101px;
    width: 80px;
    height: 71px;
    background-color: transparent;
    border-bottom: 2px solid transparent;
    border-right: 8px solid #e71e62;
    border-top: 4px solid transparent;
    -ms-transform: rotate(67deg);
    -webkit-transform: rotate(67deg);
    transform: rotate(67deg);
}

.top_of_mouth {
    top: -46px;
    left: 118px;
    width: 61px;
    height: 64px;
    background-color: #fec6df;
    z-index: 10;
}

/* 穿上一个漂亮的小裙子 */
.dress {
    top: 4px;
    left: 14px;
    width: 180px;
    height: 154px;
    background-color: #f44236;
    border: 8px solid #f895ba;
    border-bottom: none;
    -moz-border-radius: 50% 50% 50% 50% / 100% 100% 0% 0%;
    -webkit-border-radius: 50% 50% 50% 50% / 100% 100% 0% 0%;
    border-radius: 50% 50% 50% 50% / 100% 100% 0% 0%;
    z-index: 1;
}

.bottom_of_dress_1,
.bottom_of_dress_2 {
    height: 2px;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    z-index: 6;
}

.bottom_of_dress_1 {
    top: 168px;
    left: 14px;
    width: 194px;
    background-color: #f895ba;
    border-top: 5px solid #f895ba;
}

.left_of_dress,
.right_of_dress {
    top: 132px;
    height: 40px;
    width: 8px;
    background-color: #f895ba;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    z-index: 5;
}

.left_of_dress {
    left: 13px;
    -ms-transform: rotate(9deg);
    -webkit-transform: rotate(9deg);
    transform: rotate(9deg);
}

.right_of_dress {
    left: 199px;
    border-left: 3px solid #f44236;
    -ms-transform: rotate(-6deg);
    -webkit-transform: rotate(-6deg);
    transform: rotate(-6deg);
}

.bottom_of_dress_3 {
    top: 166px;
    left: 12px;
    height: 6px;
    width: 198px;
    background-color: #f895ba;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    z-index: 5;
}

/* 有了小手，就可以被司宇牵着到处逛了。 */
.left_hand,
.right_hand {
    top: 72px;
    height: 10px;
    background-color: #f895ba;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    border-bottom-right-radius: 50%;
    border-bottom-left-radius: 50%;
}

.left_hand {
    left: -29px;
    width: 75px;
    -ms-transform: rotate(156deg);
    -webkit-transform: rotate(156deg);
    transform: rotate(156deg);
    z-index: -3;
}

.right_hand {
    left: 180px;
    width: 65px;
    -ms-transform: rotate(204deg);
    -webkit-transform: rotate(204deg);
    transform: rotate(204deg);
    z-index: 2;
}

.first_finger,
.second_finger,
.third_finger,
.fourth_finger,
.fifth_finger,
.sixth_finger {
    height: 8px;
    background-color: #f895ba;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    z-index: 3;
}

.first_finger {
    top: 75px;
    left: -26px;
    width: 22px;
    border-top-left-radius: 50%;
    border-top-right-radius: 35%;
    -ms-transform: rotate(16deg);
    -webkit-transform: rotate(16deg);
    transform: rotate(16deg);
}

.third_finger {
    top: 87px;
    left: -17px;
    width: 18px;
    border-bottom-right-radius: 50%;
    -ms-transform: rotate(105deg);
    -webkit-transform: rotate(105deg);
    transform: rotate(105deg);
}

.second_finger {
    top: 86px;
    left: -27px;
    width: 18px;
    border-bottom-right-radius: 50%;
    -ms-transform: rotate(145deg);
    -webkit-transform: rotate(145deg);
    transform: rotate(145deg);
}

.fourth_finger {
    top: 78px;
    left: 230px;
    width: 22px;
    border-top-left-radius: 35%;
    border-top-right-radius: 50%;
    -ms-transform: rotate(-18deg);
    -webkit-transform: rotate(-18deg);
    transform: rotate(-18deg);
}

.sixth_finger {
    top: 89px;
    left: 224px;
    width: 18px;
    border-top-right-radius: 50%;
    -ms-transform: rotate(75deg);
    -webkit-transform: rotate(75deg);
    transform: rotate(75deg);
}

.fifth_finger {
    top: 88px;
    left: 234px;
    width: 18px;
    border-bottom-right-radius: 50%;
    border-bottom-left-radius: 50%;
    -ms-transform: rotate(38deg);
    -webkit-transform: rotate(38deg);
    transform: rotate(38deg);
}

/* 虽然有尾巴，但云猪还是没啥方向感 */
.left_of_tail,
.right_of_tail {
    width: 19px;
    background-color: transparent;
    border: 8px solid #f895ba;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    z-index: -3;
}

.left_of_tail {
    top: 100px;
    left: 0px;
    height: 30px;
    border-right: 7px solid transparent;
    -ms-transform: rotate(-80deg);
    -webkit-transform: rotate(-80deg);
    transform: rotate(-80deg);
}

.right_of_tail {
    top: 102px;
    left: -19px;
    height: 24px;
    border-left: 7px solid transparent;
    border-top: 9px solid transparent;
    -ms-transform: rotate(80deg);
    -webkit-transform: rotate(80deg);
    transform: rotate(13deg);
}

.top_of_tail {
    top: 108px;
    left: -4px;
    height: 8px;
    width: 8px;
    background-color: transparent;
    border: 6px solid transparent;
    border-top: 8px solid #f895ba;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    z-index: -3;
}

.bottom_of_tail {
    top: 129px;
    left: -19px;
    width: 12px;
    height: 8px;
    background-color: #f895ba;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    -ms-transform: rotate(100deg);
    -webkit-transform: rotate(100deg);
    transform: rotate(58deg);
    z-index: 2;
}

/* 有了腿和脚，就可以到世界上任何一个地方去旅游！ */
.left_leg,
.right_leg {
    top: 172px;
    width: 7px;
    height: 32px;
    background-color: #f895ba;
    -ms-transform: rotate(-1.5deg);
    -webkit-transform: rotate(-1.5deg);
    transform: rotate(0.5deg);
    z-index: -1;
}

.left_leg {
    left: 68px;
}

.right_leg {
    left: 140px;
}

.left_foot,
.right_foot {
    top: 185px;
    width: 55px;
    height: 55px;
}

.left_foot {
    left: 32px;
}

.right_foot {
    left: 105px;
}

.bottom_of_foot,
.top_of_foot,
.left_of_foot,
.right_of_foot {
    background-color: #009c88;
}

.bottom_of_foot {
    top: 17px;
    left: 34px;
    width: 22px;
    height: 10px;
    border-bottom: 1px solid #009c88;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -ms-transform: rotate(-1deg);
    -webkit-transform: rotate(-1deg);
    transform: rotate(-1deg);
}

/* 给佩奇造一片草地，让她在上面尽情的蹦跶吧！ */
#ground {
    position: absolute;
    margin: auto;
    overflow: hidden;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 27%;
    background-color: #77C76E;
    -moz-border-radius: 50% 50% 50% 50% / 3% 9% 0% 0%;
    -webkit-border-radius: 50% 50% 50% 50% / 3% 9% 0% 0%;
    border-radius: 50% 50% 50% 50% / 3% 9% 0% 0%;
    z-index: -4;
}

#ground * {
    position: absolute;
}

.left_yellow_flower,
.right_yellow_flower {
    width: 50px;
    height: 50px;
}

.left_yellow_flower {
    top: 61px;
    left: 881px;
}

.right_yellow_flower {
    top: 12px;
    left: 20px;
}

.top_right_yellow_petal,
.bottom_right_yellow_petal,
.bottom_left_yellow_petal,
.top_left_yellow_petal {
    width: 6px;
    height: 10px;
    background-color: #FBED04;
    -moz-border-radius: 35%;
    -webkit-border-radius: 35%;
    border-radius: 35%;
    z-index: -3;
}

.top_right_yellow_petal {
    top: 11px;
    left: 25px;
    -ms-transform: rotate(35deg);
    -webkit-transform: rotate(35deg);
    transform: rotate(35deg);
}

.bottom_right_yellow_petal {
    top: 18px;
    left: 24px;
    -ms-transform: rotate(125deg);
    -webkit-transform: rotate(125deg);
    transform: rotate(125deg);
}

.bottom_left_yellow_petal {
    top: 18px;
    left: 19px;
    -ms-transform: rotate(225deg);
    -webkit-transform: rotate(225deg);
    transform: rotate(225deg);
}

.top_left_yellow_petal {
    top: 11px;
    left: 18px;
    -ms-transform: rotate(315deg);
    -webkit-transform: rotate(315deg);
    transform: rotate(315deg);
}

.stalk_of_yellow_flower,
.stalk_of_white_flower {
    width: 6px;
    height: 22px;
    background-color: #56A14C;
    -moz-border-radius: 6px;
    -webkit-border-radius: 6px;
    border-radius: 6px;
    z-index: -3;
}

.stalk_of_yellow_flower {
    top: 20px;
    left: 21px;
}

.stalk_of_white_flower {
    top: 26px;
    left: 27px;
}

.right_clump_of_grass {
    width: 60px;
    height: 60px;
}

.left_clump_of_grass {
    top: 32px;
    left: 1082px;
}

.center_clump_of_grass {
    top: 30px;
    left: 493px;
}

.right_clump_of_grass {
    top: 90px;
    left: 314px;
}

.left_blade_of_grass,
.center_blade_of_grass,
.right_blade_of_grass {
    top: 12px;
    width: 6px;
    background-color: #64AC56;
    -moz-border-radius: 6px;
    -webkit-border-radius: 6px;
    border-radius: 6px;
    z-index: -3;
}

.left_blade_of_grass {
    left: 15px;
    height: 14px;
}

.center_blade_of_grass {
    left: 27px;
    height: 14px;
    -ms-transform: rotate(5deg);
    -webkit-transform: rotate(5deg);
    transform: rotate(5deg);
}

.right_blade_of_grass {
    left: 37px;
    height: 20px;
    -ms-transform: rotate(10deg);
    -webkit-transform: rotate(10deg);
    transform: rotate(10deg);
}

.center_white_flower {
    width: 60px;
    height: 60px;
}

.center_white_flower {
    top: 30px;
    left: 279px;
}

.top_right_white_petal,
.bottom_right_white_petal,
.bottom_left_white_petal,
.top_left_white_petal {
    width: 6px;
    height: 8px;
    background-color: #FDFFFE;
    -moz-border-radius: 35%;
    -webkit-border-radius: 35%;
    border-radius: 35%;
    z-index: -2;
}

.top_right_white_petal {
    top: 9px;
    left: 33px;
    -ms-transform: rotate(35deg);
    -webkit-transform: rotate(35deg);
    transform: rotate(35deg);
}

.bottom_right_white_petal {
    top: 22px;
    left: 34px;
    -ms-transform: rotate(125deg);
    -webkit-transform: rotate(125deg);
    transform: rotate(125deg);
}

.bottom_left_white_petal {
    top: 22px;
    left: 21px;
    -ms-transform: rotate(225deg);
    -webkit-transform: rotate(225deg);
    transform: rotate(225deg);
}

.top_left_white_petal {
    top: 10px;
    left: 21px;
    -ms-transform: rotate(315deg);
    -webkit-transform: rotate(315deg);
    transform: rotate(315deg);
}

.center_of_white_flower {
    top: 14px;
    left: 24px;
    width: 13px;
    height: 13px;
    background-color: #FFED07;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    z-index: -3;
}

@keyframes jump1 {
    from {
        animation-timing-function: ease-in;
    }

    to {
        top: 78%;
    }
}

#peppa {
    animation: jump1 200ms infinite alternate;
}

@keyframes jump2 {
    from {
        animation-timing-function: ease-in;
    }

    to {
        transform: rotate(15deg);
    }
}

.bottom_of_foot,
.left_foot,
.right_foot {
    animation: jump2 200ms infinite alternate;
}

/* 画好啦，送给世界上最可爱的查小猪，希望她喜欢！ */
`


const player = {
    id: undefined,
    time: 50,
    n: 1,
    ui: {
        demo: document.querySelector("#demo"),
        demo2: document.querySelector("#demo2")
    },
    init: () => {
        player.ui.demo.innerText = string.substr(0, player.n)
        player.ui.demo2.innerHTML = string.substr(0, player.n)
        player.bindEvents()
        player.play()

    },
    events: {
        '#btnPause': 'pause',
        '#btnPlay': 'play',
        '#btnSlow': 'slow',
        '#btnFast': 'fast',
        '#btnNormal': 'normal'
    },
    bindEvents: () => {

        for (let key in player.events)
            if (player.events.hasOwnProperty(key))
        // if用来防止遍历继承的对象
        {
            const value = player.events[key]
            document.querySelector(key).onclick = player[value]
        }

    },
    run: () => {
        player.n += 1
        if (player.n > string.length) {
            window.clearInterval(player.id)
            return
        }

        player.ui.demo.innerText = string.substr(0, player.n)
        player.ui.demo2.innerHTML = string.substr(0, player.n)
        player.ui.demo.scrollTop = player.ui.demo.scrollHeight
    },
    play: () => {
        player.pause()
        player.id = setInterval(player.run, player.time)
    },
    pause: () => {
        window.clearInterval(player.id)
    },
    slow: () => {
        player.pause()
        player.time = 50
        player.play()

    },
    normal: () => {
        player.pause()
        player.time = 20
        player.play()
    },
    fast: () => {
        player.pause()
        player.time = 0
        player.play()
    },
}

player.init()