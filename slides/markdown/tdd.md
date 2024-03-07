<slide-header>Why test your code?</slide-header>

- make sure your code works as expected
- fast feedback when writing code
- tests serve as a safety net, <br/>
  change code without fear of breaking anything!

---

<img style="border-radius: 5px; scale: 1.25" src="img/TestFeedback.png">

---

<slide-header>Why test your code?</slide-header>

- tests are a form of low level documentation

---

```python
def test__money_with_3_minor_units__converted_to_2_minor_units_currency__converts_with_half_round_up() -> None:
    money = Money(1.005, Currency.JOD)

    actual = money.convert_to(Currency.EUR, one2one_exchange)

    assert actual == Money(1.01, Currency.EUR)
```

---

<slide-header>Traditional Testing</slide-header>

Tests are written after implementing behavior

- still gives you a safety net
- no other choice when inheriting legacy code without any tests

---

<slide-header>Traditional Testing</slide-header>

Cons:

- design of the software might make testing harder
- there may be lots of code not covered by tests
- when writing tests they are written to match the implementation

---

<slide-header>Test Driven Development</slide-header>

<info-box>
<img src="img/TDD_Cycle.png"/>
</info-box>

---

<slide-header>The rules of TDD</slide-header>

<info-box>
<ol>
    <li style="color: var(--suresoft-orange)">write a <strong>failing</strong> test</li>
    <li style="color: var(--suresoft-light-green)">write just enough production code to make it pass</li>
    <li style="color: var(--suresoft-less-light-blue)">clean up (refactor) the test and production code you have written</li>
</ol>
</info-box>

---

Pros:

- forces you to think about the requirements of your code ahead of time
- forces you to write testable code
- essentially no parts of your code are untested

---

Cons:

- requires practice and discipline

---

<slide-header>Structure of a Test</slide-header>

```python [2-4|6-7|9-10|1]
def test__list_with_element__pop_element__list_is_empty() -> None:
    # Arrange
    sut = MyList()
    sut.add(1)

    # Act
    sut.pop()

    # Assert
    assert len(sut) == 0
```

---

<slide-header>Types of Tests</slide-header>

---

<slide-header>Return Value Verification</slide-header>

<info-box>
    <img src="img/ReturnValueVerification.png" />
</info-box>

---

<slide-header>State Verification</slide-header>

<info-box>
    <img src="img/StateVerification.png" />
</info-box>

---

<slide-header>Behavior Verification</slide-header>

<info-box>
    <img src="img/BehaviorVerification.png" />
</info-box>

---

<slide-header>Test Doubles</slide-header>

---

<img style="height: 45vh" src="img/TestDoubles.png" />

---

<slide-header>Hands-On Exercise</slide-header>

---

<img src="img/HVAC.png" />