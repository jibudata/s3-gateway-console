// This file is part of MinIO Console Server
// Copyright (c) 2020 MinIO, Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.
import React, { useEffect } from "react";
import { IMessageEvent, w3cwebsocket as W3CWebSocket } from "websocket";
import storage from "local-storage-fallback";
import { AppState } from "../../../store";
import { connect } from "react-redux";
import { traceMessageReceived, traceResetMessages } from "./actions";
import { TraceMessage } from "./types";
import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import { niceBytes, setCookie } from "../../../common/utils";

const styles = (theme: Theme) =>
  createStyles({
    logList: {
      background: "white",
      maxHeight: "400px",
      overflow: "auto",
      "& ul": {
        margin: "4px",
        padding: "0px"
      },
      "& ul li": {
        listStyle: "none",
        margin: "0px",
        padding: "0px",
        borderBottom: "1px solid #dedede"
      }
    }
  });

interface ITrace {
  classes: any;
  traceMessageReceived: typeof traceMessageReceived;
  traceResetMessages: typeof traceResetMessages;
  messages: TraceMessage[];
}

const Trace = ({
  classes,
  traceMessageReceived,
  traceResetMessages,
  messages
}: ITrace) => {
  useEffect(() => {
    traceResetMessages();
    const token: string = storage.getItem("token")!;
    const url = new URL(window.location.toString());
    const isDev = process.env.NODE_ENV === "development";
    const port = isDev ? "9090" : url.port;

    setCookie("token", token);

    const c = new W3CWebSocket(`ws://${url.hostname}:${port}/ws/trace`);

    let interval: any | null = null;
    if (c !== null) {
      c.onopen = () => {
        console.log("WebSocket Client Connected");
        c.send("ok");
        interval = setInterval(() => {
          c.send("ok");
        }, 10 * 1000);
      };
      c.onmessage = (message: IMessageEvent) => {
        let m: TraceMessage = JSON.parse(message.data.toString());
        m.time = new Date(m.time.toString());
        m.key = Math.random();
        traceMessageReceived(m);
      };
      c.onclose = () => {
        clearInterval(interval);
        console.log("connection closed by server");
      };
      return () => {
        c.close(1000);
        clearInterval(interval);
        console.log("closing websockets");
      };
    }
  }, [traceMessageReceived]);

  const timeFromdate = (d: Date) => {
    let h = d.getHours() < 10 ? `0${d.getHours()}` : `${d.getHours()}`;
    let m = d.getMinutes() < 10 ? `0${d.getMinutes()}` : `${d.getMinutes()}`;
    let s = d.getSeconds() < 10 ? `0${d.getSeconds()}` : `${d.getSeconds()}`;

    return `${h}:${m}:${s}:${d.getMilliseconds()}`;
  };

  return (
    <div>
      <h1>Trace</h1>
      <div className={classes.logList}>
        <ul>
          {messages.map(m => {
            return (
              <li key={m.key}>
                {timeFromdate(m.time)} - {m.api}[{m.statusCode} {m.statusMsg}]{" "}
                {m.api} {m.host} {m.client} {m.callStats.duration} ↑{" "}
                {niceBytes(m.callStats.rx + "")} ↓{" "}
                {niceBytes(m.callStats.tx + "")}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

const mapState = (state: AppState) => ({
  messages: state.trace.messages
});

const connector = connect(mapState, {
  traceMessageReceived: traceMessageReceived,
  traceResetMessages: traceResetMessages
});

export default connector(withStyles(styles)(Trace));
