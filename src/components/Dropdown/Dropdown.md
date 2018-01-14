```javascript
initialState = {
  boolVal: false
};
<div>
  <Dropdown open={state.boolVal}
    menu={<Menu>
      <MenuItem onClick={() => {console.log('clicked')}} iconName="menu" label="Open file"  shortcut="ctrl-o"/>
      <MenuItem label="Save" shortcut="ctrl-s"/>
      <MenuItem label="Save as" />
      <Divider />
      <MenuItem label="Long long to long item" shortcut="ctrl-s"/>
      <Divider />
      <MenuItem label="Exit" shortcut="alt-f4"/>
    </Menu>}>
    <Button iconName="menu" onClick={() => { setState({ boolVal: !state.boolVal}) }} onBlur={() => { setState({ boolVal: false}) }} />
  </Dropdown>
  <Dropdown open={state.boolVal2}
    direction="bottomRight"
    menu={<Menu>
      <MenuItem onClick={() => {console.log('clicked')}} iconName="menu" label="Open file ..."  shortcut="ctrl-o"/>
      <MenuItem label="Save" shortcut="ctrl-s"/>
      <MenuItem label="Long long to long item" shortcut="ctrl-s"/>
      <MenuItem label="Save as ..." />
      <Divider />
      <MenuItem label="Exit" shortcut="alt-f4"/>
    </Menu>}>
    <Button iconName="menu" onClick={() => { setState({ boolVal2: !state.boolVal2}) }} onBlur={() => { setState({ boolVal2: false}) }} />
  </Dropdown>
</div>
```
