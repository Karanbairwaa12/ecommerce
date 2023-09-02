import axios from "axios";
const BASE_URL = "http://localhost:8000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODU0YzQxOTUyMTllODI4MzkzNzIzNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4ODk4ODczNCwiZXhwIjoxNjg5MjQ3OTM0fQ.UfUaIHB6wvy130q6fQhaKj54ut6B1M3f76H5uqBJHrw"

export const publicRequest = axios.create({
    baseURL:BASE_URL,
})
export const userRequest = axios.create({
    baseURL:BASE_URL,
    header: {authorization: `Bearer ${TOKEN}`},  
})

