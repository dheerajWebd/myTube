// context import 
import base_API from "@/AxiosConfig.js"
import { createAsyncThunk } from "@reduxjs/toolkit"

// context slice import
import { createSlice } from "@reduxjs/toolkit";
import { createUser } from "./context/registerThunk/registerThunk.js";

// context store  
import { configureStore } from "@reduxjs/toolkit";
import { register } from "./context/slice/registerSlice.js";

// register import
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button.jsx";
import { ArrowRight } from "lucide-react";
import RegisterSocilMidiea from "./components/forms/registerSocilMidiea.jsx";
import { InputEmail, InputPassword } from "@/components/forms/input.jsx";
import { useState } from "react";
import { Step1, Step2 } from "@/components/forms/formSteps.jsx";
import Register from "@/components/forms/register.jsx";
import LogIn from "@/components/forms/LogIn.jsx";
import { useDispatch, useSelector } from "react-redux";

// input import 
import { Label } from "@/components/ui/label.jsx";
import { Input } from "@/components/ui/input.jsx";

// filename import is registerSocilMidea.jsx 

import { FaFacebook, FaInstagram } from "react-icons/fa";
import { RiGoogleLine } from "react-icons/ri";
import { FcAddImage } from "react-icons/fc";

import LoginThunk from "@/context/registerThunk/LoginThunk.js";

//  all exports 
export {
  // context  exports
  base_API,
  createAsyncThunk,

  // context slice export
  createUser,
  createSlice,

  // context store export
  register,
  configureStore,

  // registerUser.jsx exports
  useForm,
  Button,
  ArrowRight,
  RegisterSocilMidiea,
  InputEmail,
  InputPassword,
  FcAddImage,
  useState,
  Step1,
  Step2,
  LogIn,
  Register,
  useDispatch,
  useSelector,


  // input.jsx  exports
  Input,
  Label,


  LoginThunk,

  // registerSocilMidea.jsx  exports and All icons
  FaFacebook,
  FaInstagram,
  RiGoogleLine


}