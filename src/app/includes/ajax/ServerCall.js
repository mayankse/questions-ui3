import axios from "axios";
export class ServerCall
{
    static fnStaticGetReq(url)
    {
        return axios.get(url)
    }
    static fnSendPostReq(url,data)
    {
        return axios.post(url,data)
        
    }
}