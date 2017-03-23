import React from 'react';
import {Collapsible, CollapsibleItem} from 'react-materialize';

export default class MyCollapsible extends React.Component {
  render(){
    return (
      <Collapsible popout>
        <CollapsibleItem header='Mission' icon='filter_drama'>
          Lorem ipsum dolor sit amet.
        </CollapsibleItem>
        <CollapsibleItem header='Background' icon='filter_drama'>
          Lorem ipsum dolor sit amet.
        </CollapsibleItem>
        <CollapsibleItem header='Genre' icon='place'>
          Lorem ipsum dolor sit amet.
        </CollapsibleItem>
        <CollapsibleItem header='Inspiration' icon='whatshot'>
          Lorem ipsum dolor sit amet.
        </CollapsibleItem>
        <CollapsibleItem header='Favorite Festivals' icon='whatshot'>
          Lorem ipsum dolor sit amet.
        </CollapsibleItem>
      </Collapsible>
    );
  }
}
