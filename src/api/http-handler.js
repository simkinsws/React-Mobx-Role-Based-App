import http from "./http-common";

const getAll = () => {
    return http.get("");
}

const HttpHandler = {
    getAll
};
export default HttpHandler;