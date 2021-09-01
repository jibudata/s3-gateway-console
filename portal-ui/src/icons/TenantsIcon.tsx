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

import * as React from "react";
import { SvgIcon, SvgIconProps } from "@material-ui/core";

const TenantsIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
        <defs>
          <clipPath id="prefix__a">
            <path d="M0 0h256v256H0z" />
          </clipPath>
        </defs>
        <g clipPath="url(#prefix__a)">
          <path
            data-name="Trazado 394"
            d="M222.618 87.575a26.021 26.021 0 00-23.281 14.4l-44.307-6.431a74.36 74.36 0 002.892-20.536A74.6 74.6 0 0083.286.439 74.6 74.6 0 008.644 75.008a74.6 74.6 0 0065.415 73.98l-1.38 25.365c-.127-.006-.249-.019-.371-.019a18.408 18.408 0 00-18.42 18.4 18.41 18.41 0 0018.42 18.4 18.411 18.411 0 0018.42-18.4 18.377 18.377 0 00-7.851-15.056l1.535-28.126a74.37 74.37 0 0032.006-7.723l39.5 51.236a36.657 36.657 0 00-10.488 25.695 36.82 36.82 0 0036.84 36.8 36.817 36.817 0 0036.834-36.8 36.817 36.817 0 00-36.834-36.8 36.637 36.637 0 00-18.137 4.794l-38.7-50.2A74.839 74.839 0 00151.4 105.48l45.242 6.568c-.029.517-.078 1.029-.078 1.551a26.037 26.037 0 0026.051 26.022 26.037 26.037 0 0026.05-26.022 26.037 26.037 0 00-26.047-26.024z"
          />
          <path
            data-name="Trazado 395"
            d="M181.396 256a38.679 38.679 0 01-38.636-38.643 38.393 38.393 0 019.576-25.436l-36.435-47.307a74.862 74.862 0 01-28.494 6.932l-1.318 24.217a20.571 20.571 0 017.657 15.975 20.545 20.545 0 01-20.52 20.514 20.54 20.54 0 01-20.518-20.514 20.549 20.549 0 0118.6-20.432l1.125-20.571A75.865 75.865 0 018.2 75.818 75.907 75.907 0 0184.02-.005a75.908 75.908 0 0175.822 75.823 75.76 75.76 0 01-2.229 18.236l39.257 5.7a27.844 27.844 0 0124.216-13.965 28.051 28.051 0 0128.018 28.022 28.051 28.051 0 01-28.018 28.022 28.052 28.052 0 01-28.02-27.48l-40.61-5.9a76.059 76.059 0 01-23.551 28.463l35.308 45.854a38.644 38.644 0 0117.18-4.049 38.678 38.678 0 0138.633 38.634A38.678 38.678 0 01181.396 256zm-64.078-117.413l41.329 53.665-1.453 1.492a33.619 33.619 0 00-9.635 23.618 33.876 33.876 0 0033.837 33.84 33.875 33.875 0 0033.835-33.84 33.874 33.874 0 00-33.835-33.837 33.822 33.822 0 00-16.657 4.409l-1.814 1.027-40.89-53.094 2.092-1.434a71.22 71.22 0 0024.718-29.586l.739-1.65 48.482 7.038-.133 2.2c-.049.739-.073 1.055-.073 1.381a23.253 23.253 0 0023.227 23.225 23.249 23.249 0 0023.222-23.225 23.246 23.246 0 00-23.222-23.224 23.1 23.1 0 00-20.759 12.852l-.776 1.549-48.012-6.975.759-2.639a71.253 71.253 0 002.749-19.559A71.1 71.1 0 0084.022 4.794 71.1 71.1 0 0012.999 75.82a71.061 71.061 0 0062.243 70.465l2.225.273-1.608 29.524-2.318-.043h-.037a15.779 15.779 0 00-16 15.7 15.739 15.739 0 0015.721 15.717 15.741 15.741 0 0015.722-15.717 15.763 15.763 0 00-6.7-12.866l-1.09-.763 1.7-31.26 2.235-.033a70.305 70.305 0 0030.455-7.355z"
          />
        </g>
      </svg>
    </SvgIcon>
  );
};

export default TenantsIcon;
