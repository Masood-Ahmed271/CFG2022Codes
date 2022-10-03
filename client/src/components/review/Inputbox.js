import React, { useState, useEffect } from "react";
// import { Avatar, Button } from "@material-ui/core";
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import './Inputbox.css';
import axios from "axios";

function InputBox() {

    return (
        <div className="inputBox">
          <form>
            <Avatar />
            <div>
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
            </div>
            <div className="inputBox__input">
              <textarea className="mx-2 mb-2 form-control"
                
                placeholder="Content of your reply!"
                type="text"
                name="content"
              ></textarea>
            </div>

            <div className="text-end">
              <Button
                type="submit"
                className="inputBox__inputButton"
              >
                Post
              </Button>
            </div>
          </form>
        </div>
      );
}

export default InputBox;