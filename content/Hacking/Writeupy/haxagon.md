---
date: 2025-10-29T14:44
cssclasses:
---

https://www.google.com/search?q=bongo%20cat&id=aGF4YWdvbnsxbl90SDNfM25EXzdoM191cjFfdzQ1X25PN19ub041ZU5DM30=
## 
if ($loggedUser) {
    fetch("/api", {
      method: "PUT",
      body: JSON.stringify($cart)
    });
  }
```
() => {
  toast.push(name + " added to cart");
  const thisCartItem = $cart[$cart.map(function(e) {
    return e.id;
  }).indexOf(id)];
  if ($cart.length != 0) {
    if (!$cart.includes(thisCartItem)) {
      set_store_value(
        cart,
        $cart = [
          ...$cart,
          {
            id,
            name,
            price,
            fullPrice: price,
            quantity: 1
          }
        ],
        $cart
      );
    } else {
      set_store_value(
        cart,
        $cart[$cart.indexOf(thisCartItem)] = {
          ...thisCartItem,
          quantity: thisCartItem.quantity + 1,
          fullPrice: Math.floor((thisCartItem.quantity + 1) * thisCartItem.price * 10) / 10
        },
        $cart
      );
    }
  } else {
    set_store_value(
      cart,
      $cart = [
        ...$cart,
        {
          id,
          name,
          price,
          fullPrice: price,
          quantity: 1
        }
      ],
      $cart
    );
  }
  localStorage.setItem("cart", JSON.stringify($cart));
  if ($loggedUser) {
    fetch("/api", {
      method: "PUT",
      body: JSON.stringify($cart)
    });
  }
}
```

`[{"id":6767,"name":"Curly","price":42,"fullPrice":42,"quantity":1}]`


```
async function handle_submit(event) {
  var _a, _b, _c, _d;
  const method = ((_a = event.submitter) == null ? void 0 : _a.hasAttribute("formmethod")) ? (
    /** @type {HTMLButtonElement | HTMLInputElement} */
    event.submitter.formMethod
  ) : clone(form_element).method;
  if (method !== "post")
    return;
  event.preventDefault();
  const action = new URL(
    // We can't do submitter.formAction directly because that property is always set
    ((_b = event.submitter) == null ? void 0 : _b.hasAttribute("formaction")) ? (
      /** @type {HTMLButtonElement | HTMLInputElement} */
      event.submitter.formAction
    ) : clone(form_element).action
  );
  const form_data = new FormData(form_element);
  const submitter_name = (_c = event.submitter) == null ? void 0 : _c.getAttribute("name");
  if (submitter_name) {
    form_data.append(submitter_name, ((_d = event.submitter) == null ? void 0 : _d.getAttribute("value")) ?? "");
  }
  const controller = new AbortController();
  let cancelled = false;
  const cancel = () => cancelled = true;
  const callback = await submit({
    action,
    cancel,
    controller,
    get data() {
      return form_data;
    },
    formData: form_data,
    get form() {
      return form_element;
    },
    formElement: form_element,
    submitter: event.submitter
  }) ?? fallback_callback;
  if (cancelled)
    return;
  let result;
  try {
    const response = await fetch(action, {
      method: "POST",
      headers: {
        accept: "application/json",
        "x-sveltekit-action": "true"
      },
      cache: "no-store",
      body: form_data,
      signal: controller.signal
    });
    result = deserialize(await response.text());
    if (result.type === "error")
      result.status = response.status;
  } catch (error) {
    if (
      /** @type {any} */
      (error == null ? void 0 : error.name) === "AbortError"
    )
      return;
    result = {
      type: "error",
      error
    };
  }
  callback({
    action,
    get data() {
      return form_data;
    },
    formData: form_data,
    get form() {
      return form_element;
    },
    formElement: form_element,
    update: (opts) => fallback_callback({
      action,
      result,
      reset: opts == null ? void 0 : opts.reset,
      invalidateAll: opts == null ? void 0 : opts.invalidateAll
    }),
    // @ts-expect-error generic constraints stuff we don't care about
    result
  });
}
```