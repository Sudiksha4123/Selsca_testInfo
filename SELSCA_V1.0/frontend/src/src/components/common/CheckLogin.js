
const CheckLogin = async () => {
    try {
        Swal.fire({
            title: 'loading...',
            backdrop : 'true',
            allowOutsideClick : false,
        })
        Swal.showLoading();
        const res = await axios.get('http://localhost:5000/login/isUserAuth' , {
            headers : {
                "x-access-token" : localStorage.getItem("token"),
                "role" : role
            }
        })
        Swal.close()
        setUser(res.data.user)
        console.log(user)
    }
    catch (err) {
        Swal.fire({
            icon : "error",
            title : err.response.data.message
        })
    }
}

export default CheckLogin();