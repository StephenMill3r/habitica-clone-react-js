import React from "react";

export type taskTabsType = {
    title: string,
    category: string,
    render: (category: string) => React.ReactNode
}[]
