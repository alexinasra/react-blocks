```javascript
dropdown = undefined;
<div>
  <Dropdown onRef={(ref) => { dropdown = ref; }}
    menu={
        <Menu>
        <MenuItem onClick={() => {console.log('clicked')}} iconName="menu" label="Open file"  shortcut="ctrl-o"/>
        <MenuItem label="Save" shortcut="ctrl-s"/>
        <MenuItem label="Save as" />
        <Divider />
        <MenuItem label="Long long to long item" shortcut="ctrl-s"/>
        <Divider />
        <MenuItem label="Exit" shortcut="alt-f4"/>
      </Menu>
    }>
    <Button iconName="menu" onClick={() => { dropdown.open(); }}/>
  </Dropdown>
</div>
```
