# switchOnOffjQueryPlugin

jQuery plugin to creates switch button just mapping checkbox input

dependencyes

```
<script
  src="https://code.jquery.com/jquery-3.2.1.min.js"
  integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
  crossorigin="anonymous"></script>
<script src="sf.jquery.js"></script>
<link rel="stylesheet" type="text/css" href="sf.css">
```

Usage
```
<script type="text/javascript">
	jQuery(document).ready(function(){
          jQuery("input:checkbox").sf();
    })
</script>
```

ex:
Default  switch on/off
```
<input type="checkbox" id="teste" />
```
Custom label
```
<input type="checkbox" id="maisum" />
```
Custom rounded switch on/off button
```
<input type="checkbox" id="outro" />
```

