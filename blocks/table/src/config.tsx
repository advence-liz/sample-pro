
import React from "react"
import { Divider, Tag } from "antd"


const columns = [
    {
        title: "Name",
        dataIndex: "name",
        key: "name",
        render: text => <a>{text}</a>
    },
    {
        title: "Age",
        dataIndex: "age",
        key: "age"
    },
    {
        title: "Address",
        dataIndex: "address",
        key: "address"
    },
    {
        title: "Tags",
        key: "tags",
        dataIndex: "tags",
        render: tags => (
            <span>
                {tags.map(tag => {
                    let color = tag.length > 5 ? "geekblue" : "green";
                    if (tag === "loser") {
                        color = "volcano";
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </span>
        )
    },
    {
        title: "Action",
        key: "action",
        render: (text, record) => (
            <span>
                <a>Invite {record.name}</a>
                <Divider type="vertical" />
                <a>Delete</a>
            </span>
        )
    }
]


export { columns }

