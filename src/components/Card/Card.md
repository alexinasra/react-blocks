```javascript
<Card direction="column">
  <CardImage src="https://about.canva.com/wp-content/uploads/sites/3/2017/01/christmasart_card.png" />
  <CardTitle title="Avatar Title" />
  <CardParagraph>
    Every recognizable dentist prosecutes near the scheme. An oriental axis courts a poke below a peak guidance. The sky chooses! A duplicate shines.
  </CardParagraph>
  <CardSection direction="row">
    <Button className="primary" label="my button"/>
    <Button label="my button"/>
    <Button label="my button"/>
    <Button label="my button"/>
  </CardSection>
</Card>
```

```javascript
<div>
  <Card direction="column">
    <CardTitle title="Avatar Title" />
    <Divider />
    <CardSection direction="row">
      <Button className="primary" label="my button"/>
      <Button label="my button"/>
    </CardSection>
  </Card>
  <Card direction="row">
    <CardTitle title="Avatar Title" subtitle="small text here"  />
    <Divider />
    <CardSection style={{maxWidth: '100px'}} direction="column">
      <Button className="primary" label="my button"/>
      <Button label="my button"/>
    </CardSection>
  </Card>
  <Card direction="row">
    <CardTitle avatar={<Avatar src='http://www.funnytop.com/uploads/avatar/7_25680.png' />} title="Avatar Title" />
    <Divider />
    <CardSection style={{maxWidth: '100px'}} direction="column">
      <Button className="primary" label="my button"/>
      <Button label="my button"/>
    </CardSection>
  </Card>
  <Card direction="column" style={{display: 'inline-flex'}}>
    <CardTitle avatar={<Avatar src='http://www.funnytop.com/uploads/avatar/7_25680.png' />} title="Avatar Title" subtitle="small text here" />
    <CardTitle avatar={<Avatar src='http://www.funnytop.com/uploads/avatar/7_25680.png' />} title="Avatar Title" subtitle="small text here" />
    <CardTitle avatar={<Avatar src='http://www.funnytop.com/uploads/avatar/7_25680.png' />} title="Avatar Title" subtitle="small text here" />
    <Divider />
    <CardSection direction="row">
      <Button className="primary" label="my button"/>
      <Button label="my button"/>
    </CardSection>
  </Card>
</div>
```
