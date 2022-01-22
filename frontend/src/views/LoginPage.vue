<template>
    <div>
        <div class="cont"></div>
        <div class="blur">
            <div class="login">
                <div class="login_borders">
                    <div class="login_title"> Login </div>
                    <form action="post" class="col">
                        <div class="login_subtitle">Email</div>
                        <input type="email" name="" placeholder="example@example.com">
                        <div class="login_subtitle" style="margin-top: 1vhpx">Password</div>
                        <input type="password" name="" placeholder="yourawesomepassword">
                        <div class="remember">
                            Remember me
                            <input type="checkbox" style="width:10%; margin: 0; padding: 0">
                        </div>
                        <input type="submit" name="" value="Login">
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.login_subtitle {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
}
.login_title {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 3em;
    margin-top: 15px;
}
.login_borders {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-style: solid;
    height: 95%;
    width: 95%;
    border-radius: 15px;
    border-color: rgba(255, 255, 255, 0.6);
}
.col {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;
}
.remember {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 25px;
    margin-top: 10px;
}
.cont {
    background-image: url("../assets/mountain.jpg");

    width: 100%;
    height: 100%;
    position: fixed;
    margin: 0;
    z-index: -1;

    filter: blur(5px);
    -webkit-filter: blur(5px);
    -moz-filter: blur(5px);
    -o-filter: blur(5px);
    -ms-filter: blur(5px);

    background-position: center ;
    background-repeat: no-repeat;
    background-size: cover;
}
.blur {
    width: 100%;
    height: 100%;
    position: fixed;
    margin: 0;
    
    background-color: rgba(0, 0, 0, 0.5);

    background-position: center ;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.login {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 35%;
    height: 60%;
    background-color: rgba(32, 40, 68, 0.4);
    border-radius:4px;
    position:absolute;
    color:#fff;
    box-sizing: border-box;
    border-radius: 20px;
}
.login input {
    width: 100%;
    margin-bottom: 20px;
}
.login input[type="email"], input[type="password"] {
    border: none;
    border-bottom: 1px solid #fff;
    color: white;
    background: transparent;
    outline: none;
    height: 40px; 
}
.login input[type="submit"] {
    border: none;
    outline: none;
    height: 40px;
    color: white;
    width: 50%;
    background-color: #c62034;
    font-size: 18px;
    border-radius: 20px;
    transition: all 1s ease;
}
.login input[type="submit"]:hover {
    background-color: white;
    transition: all 1s ease;
    color: #c62034;
}
</style>