// This file is part of MinIO Console Server
// Copyright (c) 2021 MinIO, Inc.
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

import React, { useEffect, useState } from "react";
import request from "superagent";
import Lottie from 'react-lottie';
import { FormattedMessage, useIntl } from "react-intl";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Alert from '@material-ui/lab/Alert';
import {
  Collapse,
  Paper,
  TextFieldProps,
} from "@material-ui/core";
import {
  createStyles,
  makeStyles,
  Theme,
  withStyles,
} from "@material-ui/core/styles";
import { SystemState } from "../../types";
import { userLoggedIn } from "../../actions";
import api from "../../common/api";
import { ILoginDetails, loginStrategyType } from "./types";
import history from "../../history";
import { OutlinedInputProps } from "@material-ui/core/OutlinedInput";
import animationData from '../../icons/not_ready.json';

const styles = (theme: Theme) =>
  createStyles({
    "@global": {
      body: {
        backgroundColor: "#FAFAFA",
      },
    },
    paper: {
      width: "100%",
      height: "100vh",
      backgroundImage: "url(/login_bg.jpg)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      position: "relative",
    },
    logo: {
      width: "180px",
      height: "54px",
      position: "absolute",
      top: 40,
      left: 40,
      backgroundImage: "url(/logo.png)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: "100%", // Fix IE 11 issue.
    },
    submit: {
      width: "100%",
      height: 60,
      boxShadow: "none",
      padding: "16px 30px",
      margin: "40px auto 20px",
    },
    theLogin: {
      height: "100%",
      background: "rgba(255, 255, 255, 0.3)",
      backdropFilter: "blur(10px)",
      display: "flex",
      flexDirection: "column",
      padding: "40px",
      justifyContent: "center",
    },
    loadingLoginStrategy: {
      textAlign: "center",
    },
    headerTitle: {
      marginBottom: 30,
      fontSize: 40,
    },
    submitContainer: {
      textAlign: "right",
    },
    disclaimer: {
      fontSize: 12,
      marginTop: 10,
      textAlign: "right"
    },
    jwtInput: {
      marginTop: 45,
    },
    linearPredef: {
      height: 10,
    },
    alert: {
      marginTop: '40px',
      width: "calc(100% - 38px)"
    }
  });

const inputStyles = makeStyles((theme: Theme) =>
  createStyles({
    disabled: {
      "&.MuiInput-underline::before": {
        borderColor: "#eaeaea",
        borderBottomStyle: "solid",
      },
    },
  })
);

function LoginField(props: TextFieldProps) {
  const classes = inputStyles();

  return (
    <TextField
      InputProps={{ classes } as Partial<OutlinedInputProps>}
      variant="outlined"
      {...props}
    />
  );
}

const mapState = (state: SystemState) => ({
  loggedIn: state.loggedIn,
});

const connector = connect(mapState, { userLoggedIn });

// The inferred type will look like:
// {isOn: boolean, toggleOn: () => void}

interface ILoginProps {
  userLoggedIn: typeof userLoggedIn;
  classes: any;
}

interface LoginStrategyRoutes {
  [key: string]: string;
}

interface LoginStrategyPayload {
  [key: string]: any;
}

const Login = ({ classes, userLoggedIn }: ILoginProps) => {
  const { formatMessage } = useIntl();
  const [accessKey, setAccessKey] = useState<string>("");
  const [jwt, setJwt] = useState<string>("");
  const [secretKey, setSecretKey] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loginStrategy, setLoginStrategy] = useState<ILoginDetails>({
    loginStrategy: loginStrategyType.unknown,
    redirect: "",
  });
  const [loginSending, setLoginSending] = useState<boolean>(false);

  const loginStrategyEndpoints: LoginStrategyRoutes = {
    form: "/api/v1/login",
    "service-account": "/api/v1/login/operator",
  };
  const loginStrategyPayload: LoginStrategyPayload = {
    form: { accessKey, secretKey },
    "service-account": { jwt },
  };

  const fetchConfiguration = () => {
    api
      .invoke("GET", "/api/v1/login")
      .then((loginDetails: ILoginDetails) => {
        setLoginStrategy(loginDetails);
        setError("");
        if (
          loginDetails.loginStrategy === "redirect" &&
          loginDetails.redirect !== ""
        ) {
          //location.href = loginDetails.redirect;
        }
      })
      .catch((err: any) => {
        console.warn(err)
      });
  };

  const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoginSending(true);
    request
      .post(
        loginStrategyEndpoints[loginStrategy.loginStrategy] || "/api/v1/login"
      )
      .send(loginStrategyPayload[loginStrategy.loginStrategy])
      .then((res: any) => {
        const bodyResponse = res.body;
        if (bodyResponse.error) {
          setLoginSending(false);
          // throw will be moved to catch block once bad login returns 403
          throw bodyResponse.error;
        }
      })
      .then(() => {
        // We set the state in redux
        userLoggedIn(true);
        if (loginStrategy.loginStrategy === loginStrategyType.form) {
          localStorage.setItem("userLoggedIn", btoa(accessKey));
        }

        history.push("/");
      })
      .catch((err) => {
        setLoginSending(false);
        setError(err.message);
      });
  };

  useEffect(() => {
    fetchConfiguration();
  }, []);

  let loginComponent = null;

  switch (loginStrategy.loginStrategy) {
    case loginStrategyType.form: {
      loginComponent = (
        <React.Fragment>
          <Typography
            component="h1"
            variant="h6"
            className={classes.headerTitle}
            align="center"
          >
            <FormattedMessage id="login.title" />
          </Typography>
          <form className={classes.form} noValidate onSubmit={formSubmit}>
            <Grid container spacing={5}>
              <Grid item xs={12}>
                <LoginField
                  fullWidth
                  id="accessKey"
                  value={accessKey}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setAccessKey(e.target.value)
                  }
                  label={formatMessage({ id: 'login.access_key' })}
                  name="accessKey"
                  autoComplete="username"
                  disabled={loginSending}
                />
              </Grid>
              <Grid item xs={12}>
                <LoginField
                  fullWidth
                  value={secretKey}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setSecretKey(e.target.value)
                  }
                  name="secretKey"
                  label={formatMessage({ id: 'login.secret_key' })}
                  type="password"
                  id="secretKey"
                  autoComplete="current-password"
                  disabled={loginSending}
                />
              </Grid>
            </Grid>
            <Grid item xs={12} className={classes.submitContainer}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.submit}
                disabled={secretKey === "" || accessKey === "" || loginSending}
              >
                <FormattedMessage id={`login.${loginSending ? 'pending' : 'login'}`} />
              </Button>
            </Grid>
            {/* {loginSending && (
              <Grid item xs={12} className={classes.linearPredef}>
                <LinearProgress />
              </Grid>
            )} */}
            <Grid item xs={12} className={classes.disclaimer}>
              <strong><FormattedMessage id="login.no_access_key_title" /></strong>{' '}
              <FormattedMessage id="login.no_access_key_sub" />
            </Grid>
          </form>
        </React.Fragment>
      );
      break;
    }
    // case loginStrategyType.redirect: {
    //   loginComponent = (
    //     <React.Fragment>
    //       <Typography
    //         component="h1"
    //         variant="h6"
    //         className={classes.headerTitle}
    //       >
    //         <FormattedMessage id="login.title" />
    //       </Typography>
    //       <Button
    //         component={"a"}
    //         href={loginStrategy.redirect.replace(
    //           "%5BHOSTNAME%5D",
    //           window.location.hostname
    //         )}
    //         type="submit"
    //         variant="contained"
    //         color="primary"
    //         className={classes.submit}
    //       >
    //         Login with SSO
    //       </Button>
    //     </React.Fragment>
    //   );
    //   break;
    // }
    // case loginStrategyType.serviceAccount: {
    //   loginComponent = (
    //     <React.Fragment>
    //       <Typography
    //         component="h1"
    //         variant="h6"
    //         className={classes.headerTitle}
    //       >
    //         Operator Login
    //       </Typography>
    //       <form className={classes.form} noValidate onSubmit={formSubmit}>
    //         <Grid container spacing={2}>
    //           <Grid item xs={12} className={classes.jwtInput}>
    //             <LoginField
    //               required
    //               fullWidth
    //               id="jwt"
    //               value={jwt}
    //               onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
    //                 setJwt(e.target.value)
    //               }
    //               label="JWT"
    //               name="jwt"
    //               autoComplete="off"
    //               disabled={loginSending}
    //             />
    //           </Grid>
    //         </Grid>
    //         <Grid item xs={12} className={classes.submitContainer}>
    //           <Button
    //             type="submit"
    //             variant="contained"
    //             color="primary"
    //             className={classes.submit}
    //             disabled={jwt === "" || loginSending}
    //           >
    //             Login
    //           </Button>
    //         </Grid>
    //         <Grid item xs={12} className={classes.linearPredef}>
    //           {loginSending && <LinearProgress />}
    //         </Grid>
    //         <Grid item xs={12} className={classes.disclaimer}>
    //           <strong>Don't have an access key?</strong>
    //           <br />
    //           Contact your administrator to have one made
    //         </Grid>
    //       </form>
    //     </React.Fragment>
    //   );
    //   break;
    // }
    default:
      loginComponent = (
        <div>
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: animationData,
              rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
              }
            }}
            height={400}
            width={400}
          />
          <Typography align="center" component="h1" variant="h3">
            <i>Uh-oh</i>
          </Typography>
          <Typography align="center">
            <FormattedMessage id="login.not_ready" />
          </Typography>
        </div>
      );
  }

  return (
    <React.Fragment>
      <Paper className={classes.paper}>
        <div className={classes.logo} />
        <Grid container className="h-100">
          <Grid item xs={7} />
          <Grid item xs={5} className={classes.theLogin}>
            {loginComponent}
            <Collapse in={!!error} className={classes.alert}>
              <Alert onClose={() => setError("")} severity="error" className="w-100">{error}</Alert>
            </Collapse>
          </Grid>
        </Grid>
      </Paper>
    </React.Fragment>
  );
};

export default connector(withStyles(styles)(Login));
