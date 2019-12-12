import * as React from 'react';
import { State } from '../states/States';
import { Actions } from '../containers/Container';

interface OwnProps {}

type PropsType = OwnProps & State & Actions;

export const Home: React.SFC<PropsType> = (props: PropsType) => {
    console.log(props);
    return (
        <div>
            <div className="field">
                <input
                    type="text"
                    placeholder="name"
                    value={props.name}
                    onChange={(e) => props.updateName(e.target.value)}
                />
            </div>
            <div className="field">
                <input
                    type="email"
                    placeholder="email"
                    value={props.email}
                    onChange={(e) => props.updateEmail(e.target.value)}
                />
            </div>
            <div>{props.name}</div>
            <div>{props.email}</div>
        </div>
    );
};
