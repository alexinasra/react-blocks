```javascript
<Card direction="column" className="primary">
  <CardImage src="http://moc.co/wp-content/uploads/2015/06/headershapes2.png" />
  <CardSection direction="row" className="primary">
    <ButtonGroup>
      <Button className="primary" label="my button"/>
      <Button label="my button"/>
      <Button label="my button"/>
      <Button label="my button"/>
    </ButtonGroup>
  </CardSection>
</Card>
```

```javascript
<div>
  <Card direction="column">
    <CardTitle title="Card Title" />
    <Divider />
    <CardSection direction="row">
      <Button className="primary" label="my button"/>
      <Button label="my button"/>
    </CardSection>
  </Card>
  <Card direction="row">
    <CardTitle title="Card Title" subtitle="small text here"  />
    <Divider />
    <CardSection style={{maxWidth: '100px'}} direction="column">
      <Button className="primary" label="my button"/>
      <Button label="my button"/>
    </CardSection>
  </Card>
  <Card direction="row">
    <CardTitle avatar={<Avatar src='http://www.funnytop.com/uploads/avatar/7_25680.png' />} title="Card Title" />
    <Divider />
    <CardSection style={{maxWidth: '100px'}} direction="column">
      <Button className="primary" label="my button"/>
      <Button label="my button"/>
    </CardSection>
  </Card>
  <Card direction="column" style={{display: 'inline-flex'}}>
    <CardTitle avatar={<Avatar src='http://www.funnytop.com/uploads/avatar/7_25680.png' />} title="Card Title" subtitle="small text here" />
    <CardTitle avatar={<Avatar src='http://www.funnytop.com/uploads/avatar/7_25680.png' />} title="Card Title" subtitle="small text here" />
    <CardTitle avatar={<Avatar src='http://www.funnytop.com/uploads/avatar/7_25680.png' />} title="Card Title" subtitle="small text here" />
    <Divider />
    <CardSection direction="row">
      <Button className="primary" label="my button"/>
      <Button label="my button"/>
    </CardSection>
  </Card>
</div>
```
