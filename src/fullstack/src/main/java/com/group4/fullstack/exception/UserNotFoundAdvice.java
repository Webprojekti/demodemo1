package com.group4.fullstack.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import java.util.Map;
import java.util.HashMap;


@ControllerAdvice

    public class UserNotFoundAdvice {

    @ExceptionHandler(UserNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    @ResponseBody

    
        public Map<String,String> exceptionHandler(UserNotFoundException exception) {
            Map<String,String> errorMap=new HashMap<>();
            errorMap.put("errormessage", exception.getMessage());
            return errorMap;
        }
    }
    

