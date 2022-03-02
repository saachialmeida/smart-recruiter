/** -----------------------
 * Import API 
 --------------------------*/
import { API } from '../../backend'
import ReactGa from 'react-ga';
/** **************************
 * Student SignUp API 
*******************************/
export const studentSignUp = student => {
    return fetch(`${API}Student/StudentSignUp`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(student)
    })
        .then((res) => {
            return res.json();
        })
        .catch(err => {
            console.log(err);
        });
}
/** **************************
 * Student Login or SignIn API 
*******************************/
export const studentSignIn = student => {
    return fetch(`${API}Student/StudentLogin`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(student)
    })
        .then((res) => {
            return res.json();
        })
        .catch(err => {
            console.log(err);
        });

}
/** **************************
 * Student Login or SignIn API 
*******************************/
export const sendOTPOnmail = student => {
    return fetch(`${API}Student/emailauthentication/verifyEmail`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(student)
    })
        .then((res) => {
            return res.json();
        })
        .catch(err => {
            console.log(err);
        });
}
/** **************************
 * Student forgot Password API 
*******************************/
export const forgotpassword = student => {
    return fetch(`${API}Student/forgotpassword`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(student)
    })
        .then((res) => {
            return res.json();
        })
        .catch(err => {
            console.log(err);
        })
}
/** **************************
 * Update Student Profile API 
*******************************/
export const updateProfile = student => {
    return fetch(`${API}Student/updateprofile`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(student)
    })
        .then((res) => {
            return res.json();
        })
        .catch(err => {
            console.log(err);
        })
}

/** **************************
 * Student Auth API 
*******************************/
export const isAuthenticated = () => {
    ReactGa.initialize('G-HH20HZVZWJ');
    ReactGa.pageview(window.location.pathname + window.location.search);
    if (typeof window === undefined)
        return false;
    if (localStorage.getItem('student'))
        return true;
    else
        return false;
}

/** **************************
 * Student Logout API 
*******************************/
export const StudentLogout = () => {
    if (typeof window !== undefined) {
        localStorage.clear();
    }
}
/** **************************
 * Student Logout API 
*******************************/
export const AlumniData = (val) => {
    return fetch(`${API}Student/convertExcelToJson/${val}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
    })
        .then((res) => {
            return res.json();
        })
        .catch(err => {
            console.log(err);
        });
}

/** **************************
 * add Interview Exp 
*******************************/
export const AddInterviewExp = (values) => {
    return fetch(`${API}Student/InterviewExp/add_interviewExp`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(values)
    })
        .then((res) => {
            return res.json();
        })
        .catch(err => {
            console.log(err);
        });
}
/** **************************
 * Get Interview Exp Details 
*******************************/
export const GetInterviewExpDetails = () => {
    return fetch(`${API}Student/InterviewExp/get_InterviewExp`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
    })
        .then((res) => {
            return res.json();
        })
        .catch(err => {
            console.log(err);
        });
}
/** *********************************
 * update Approval of Interview Exp  
*************************************/
export const ApprovalInterviewDetails = (values) => {
    return fetch(`${API}Student/InterviewExp/update_approval`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(values)
    })
        .then((res) => {
            return res.json();
        })
        .catch(err => {
            console.log(err);
        })
}