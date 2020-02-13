import React  from 'react';

type Props = {
    title: string
}

class SampleTest extends React.Component<Props> {

    constructor(props: Props){
        super(props);
    }

    render(){
        return (
            <div className="testLabel">
                <label>{this.props.title}</label>
            </div>    
        );
    }
}

export default SampleTest;