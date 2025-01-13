// api-docs/page.js

"use client";

import React from "react";
import { RedocStandalone } from "redoc";
import { getApiDocs } from "@/docs/index";

const docs = getApiDocs();

export default function ApiDocs() {
	return (
		<RedocStandalone
			spec={docs}
			options={{
				hideDownloadButton: true,
			}}
		/>
	);
}
