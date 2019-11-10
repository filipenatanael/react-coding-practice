import React from "react";
import { ok } from "assert";

interface Person {
    firstName: string;
    lastName: string;
}

interface Props {
    text: string;
    bool?: boolean;
    num?: number;
    fn?: (bob: string) => string;
    obj?: {
      str: string
    },
    person: Person
}

const TextField: React.FC<Props> = (props) => {
    return (
        <div>
         <h1>{JSON.stringify(props)}</h1>
        </div>
    );
}

export default TextField;

// export class TextField extends Component<{ text: string }> {
//  render() {
//      return(
//          <h1>Hello World!!</h1>
//      )
//  }
// }


