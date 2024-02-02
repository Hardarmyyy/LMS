import {createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'
import App from '../App'

import AdminPage from '../Pages/AdminPage/AdminPage'

import SchoolSignup from '../Pages/Auth/SchoolSignup'
import Login from '../Pages/Auth/Login'
import ForgotPassword from '../Pages/Auth/ForgotPassword'
import ResetPassword from '../Pages/Auth/ResetPassword'

import HomePage from '../Pages/Homepage/Homepage'
import DashBorad from '../Pages/Dashboard/Dashboard'
import GenerateBill from '../Pages/Payments/GenerateBill'
import NewPayment from '../Pages/Payments/NewPayment'
import RegisterStudent from '../Pages/Students/RegisterStudents'
import RegisterEmployee from '../Pages/Staffs/RegisterEmployee'


import PageNotFound from '../Pages/PageNotFound/PageNotFound'
import Unauthorized from '../Pages/Unauthourized/Unauthorized'


export const router = createBrowserRouter(
    createRoutesFromElements(
    <Route element={<App></App>}> 

        <Route path='/' element={<AdminPage></AdminPage>}></Route>
        <Route path='/register-school' element={<SchoolSignup></SchoolSignup>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/forgot-password' element={<ForgotPassword></ForgotPassword>}></Route>
        <Route path='/reset-password' element={<ResetPassword></ResetPassword>}></Route>

        <Route path='/portal' element={<HomePage></HomePage>}>

            <Route index element={<DashBorad></DashBorad>}></Route>
            <Route path=':generate-bill' element={<GenerateBill></GenerateBill>}></Route>
            <Route path=':new-payment' element={<NewPayment></NewPayment>}></Route>
            <Route path=':register-new-student' element={<RegisterStudent></RegisterStudent>}></Route>
            <Route path=':register-new-employee' element={<RegisterEmployee></RegisterEmployee>}></Route>

        </Route>

        <Route path='/unauthorized' element={<Unauthorized></Unauthorized>}></Route>
        <Route path='*' element={<PageNotFound></PageNotFound>}></Route>

    </Route> 
)
)
