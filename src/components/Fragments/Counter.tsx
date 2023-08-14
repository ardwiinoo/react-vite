import React from "react"

class Counter extends React.Component {

    constructor(props: number) {
        super(props)
        this.state = {
            count: 0
        }

        console.log('constructor')
    }

    componentDidMount(): void {
        this.setState({ count: 1 })
        console.log('componentDidMount')
    }

    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {
        console.log('componentDidUpdate')
        if(this.state.count === 10) {
            this.setState({count: 5})
        }
    }

    render(): React.ReactNode {

        console.log('render')

        return (
            <div className="flex items-center">
                <h1 className="mr-5">{this.state.count}</h1>
                <button className="bg-black text-white p-3" onClick={() => this.setState({ count: this.state.count + 1 })}>+</button>
            </div>
        )
    }    
}

export default Counter