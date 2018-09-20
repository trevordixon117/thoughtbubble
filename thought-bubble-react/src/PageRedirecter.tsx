import * as React from 'react';

interface IPageRedirecter {
    pageName: string,
    targetName: string,
    onRedirect: (name: string) => void
}

class PageRedirecter extends React.Component<IPageRedirecter> {
    public onDelete = () => {
        this.props.onRedirect(this.props.targetName);
    }
}

export default PageRedirecter;