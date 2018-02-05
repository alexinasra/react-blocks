```javascript
<div>
  <Nav className="">
    <NavOuterLink to="#" label="OuterLink 1" />
    <NavOuterLink to="#" label="OuterLink 2" />
    <NavOuterLink to="#" label="OuterLink 3" />
    <NavAction label="open" onClick={() => {setState({ isOpen: !state.isOpen })}} />
    <Collapse collapsed={state.isOpen}>
      <Nav>
        <NavOuterLink to="#" label="OuterLink 1" />
        <NavOuterLink to="#" label="OuterLink 2" />
        <NavOuterLink to="#" label="OuterLink 3" />
      </Nav>
    </Collapse>
    <Divider shadow={state.isOpen} />
    <NavOuterLink to="#" label="OuterLink 2" />
    <NavOuterLink to="#" label="OuterLink 3" />
  </Nav>

</div>
```
